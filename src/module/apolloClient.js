import fetch from "isomorphic-fetch"; 
// IE 에서는 isomorphic-fetch 를 사용해야 호환가능
import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from } from 'apollo-link';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
    uri: `/graphql`,
    credentials: 'same-origin'
})

// JWT 제이슨 웹 토큰 이용중일때 사용할 heard 설정 
// 현재 프로젝트는 세션을 사용중이기에 필요없음
// const authLink = new ApolloLink(( opperation, forward ) => {
//     const token = Accounts._storedLoginToken();
//     opperation.setContext(() => ({
//         headers: {
//             'login-token': token
//         }
//     }));
//     return forward(opperation);
// });

const client = new ApolloClient({
    link: httpLink,
    // link: from([httpLink, authLink]),
    cache
});

export default client;