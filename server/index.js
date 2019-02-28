// GraphQL
import { ApolloServer } from "apollo-server-express";
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import schemaDirectives from './directives';
import { processUpload } from './utils/upload'

// Express
import express from 'express';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { resolve } from 'path';

// mongoose
import mongoose from 'mongoose';

// Config
import {IN_PROD, SESS_NAME, SESS_SECRET, SESS_LIFETIME, PREDIS_HOST, PREDIS_PORT, PREDIS_PASSWORD, APP_PORT, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} from './config';

(async () => {
    try {
        await mongoose.connect(
            `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
            { useNewUrlParser: true }
        );

        const app = express();

        app.disable('x-powered-by');
        
        const RedisStore = connectRedis(session);
        const store = new RedisStore({
            host: PREDIS_HOST,
            port: PREDIS_PORT,
            password: PREDIS_PASSWORD
        });

        app.use(session({
            store,
            name: SESS_NAME,
            secret: SESS_SECRET,
            resave: true,
            rolling: true,
            saveUninitialized: false,
            cookie: {
                maxAge: parseInt(SESS_LIFETIME),
                sameSite: true,
                secure: IN_PROD
            }
        }));

        const server = new ApolloServer({
            typeDefs,
            resolvers,
            schemaDirectives,
            cors: false,
            playground: IN_PROD ? false : {
                settings: {
                    'request.credentials': 'include'
                }
            },
            context({ req, res }) {
                return {
                    utils: {
                        processUpload
                    },
                    req,
                    res
                }
            }
            // context: ({req, res}) => ({req, res})
        });

        app.use('/', express.static(resolve(__dirname, '../build')));

        // app.use('/api', api);
        /* support client-side routing */
        app.get('*', (req, res) => {
            res.sendFile(resolve(__dirname, './../build/index.html'));
        });
        
        server.applyMiddleware({ app });

        app.listen({ port: APP_PORT }, () => 
            console.log(`localhost:${APP_PORT}:${server.graphqlPath}`)
        );

    } catch(e) {
        console.error(e);
    }
})()