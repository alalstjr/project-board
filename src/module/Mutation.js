import gql from "graphql-tag";

// AUTH 인증
export const AUTH_SIGNUP = gql`
    mutation CreateSignUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password) {
            id
        }
    }
`;
export const AUTH_SIGNIN = gql`
    mutation CreateSignIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
            id
            email
        }
    }
`;
export const AUTH_LOGOUT = gql`
    mutation{
        signOut
    }
`;

// BOARD 게시판
export const BOARD_WRITE = gql`
    mutation CreateWrite($writeText: String!, $tagList: [String], $secret: Boolean!, $file: Upload!) {
        boardWrite(content: $writeText, tag: $tagList, secret: $secret, file: $file) {
            id
        }
    }
`;
export const BOARD_LIKE = gql`
    mutation CreateLike($id: String!, $user: String!) {
        boardLikeApi(id: $id, user: $user) {
            id
            boardLike
        }
    }
`;

// File Upload
export const UPLOAD_FILE = gql`
    mutation($file: Upload!) {
        singleUpload(file: $file)
    }
`;