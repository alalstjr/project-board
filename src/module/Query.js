import gql from 'graphql-tag';

// AUTH 인증
export const USER = gql`
    query userAuth {
        me {
            id
            email
            username
        }
    }
`;

// BOARD 게시판
export const BOARD_LIST = gql`
    query boardList {
        boardList {
            id
            content
            tag
            secret
            createdAt
            updatedAt
            user
            userName
            boardLike
            file
        }
    }
`;
export const BOARD_LIST_STATE = gql`
    query boardListState($id: String!) {
        boardListState(id: $id) {
            boardLike
        }
    }
`;