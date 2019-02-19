import gql from 'graphql-tag';

export const USER = gql`
    query userAuth {
        me {
            id
            email
            username
        }
    }
`;