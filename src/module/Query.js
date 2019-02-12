// import { gql } from 'react-apollo';
import { gql } from "apollo-boost";

export const USER = gql`
    query {
        me {
            id
            email
        }
    }
`;