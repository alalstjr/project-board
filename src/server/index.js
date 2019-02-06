// GraphQL
import { ApolloServer } from "apollo-server-express";
import typeDefs from './typeDefs';
import resolvers from './resolvers';

// Express
import express from 'express';

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
        // 웹상에 개발 환경이 노출되지 않도록 보안작업

        const server = new ApolloServer({
            typeDefs,
            resolvers,
            playground: !IN_PROD,
            context: ({req, res}) => ({req, res})
        });

        server.applyMiddleware({ app });

        app.listen({ port: APP_PORT }, () => 
            console.log(`localhost:${APP_PORT}:${server.graphqlPath}`)
        );
    } catch(e) {
        console.error(e);
    }
})()

