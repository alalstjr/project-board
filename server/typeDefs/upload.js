import { gql } from 'apollo-server-express';

export default gql`
    type File {
        id: ID!
        path: String!
        filename: String!
        mimetype: String!
    }

    extend type Query {
        getUploads: [File]
    }

    extend type Mutation {
        singleUpload(file: Upload!): Boolean!
        multipleUpload(files: [Upload!]!): [File!]!
    }
`;