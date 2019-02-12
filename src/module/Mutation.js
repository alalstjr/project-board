import gql from "graphql-tag";

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