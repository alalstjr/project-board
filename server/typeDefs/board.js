import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        boardList: [Board]
        boardListState(
            id: String!
        ): Board
    }
    extend type Mutation {
        boardWrite(
            content: String!,
            tag: [String],
            secret: Boolean!,
            file: Upload!
        ): Board @auth
        boardLikeApi(
            id: String!
            user: String!
        ): Board @auth
    }

    type Board {
        id: ID!
        content: String!
        tag: [String]
        secret: Boolean!
        createdAt: String!
        updatedAt: String!
        user: String!
        userName: String!
        boardLike: [String]!
        file: Upload!
    }
`;