import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        me: User
        user(id: ID!): User @auth
    }
    extend type Mutation {
        signUp(
            email: String!,
            username: String!,
            password: String!
        ): User @guest
        signIn(
            email: String!,
            password: String!
        ): User @guest
        signOut: Boolean @auth
    }

    type User {
        id: ID!
        email: String!
        username: String!
        createdAt: String!
        updatedAt: String!
    }
`;