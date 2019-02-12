import fetch from "isomorphic-fetch"; 
// IE 에서는 isomorphic-fetch 를 사용해야 호환가능
import ApolloClient from "apollo-boost";
import { createHttpLink } from 'apollo-link-http';
import { APP_PORT } from 'server/config';

const link = createHttpLink({ uri: '/graphql', fetch: fetch });

const client = new ApolloClient({
    uri : `http://localhost:${APP_PORT}/graphql`,
    link
});

export default client;