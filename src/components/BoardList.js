import React from 'react';
import Poster from './Poster';
import PropTypes from 'prop-types';
// graphQL
import { withApollo, graphql } from 'react-apollo';
import { BOARD_LIST } from 'module/Query';
// Style
import { BoardListBox } from 'style/BoardList';

const BoardList = ({ loading, boardList, user}) => {
    if (loading) return null;
    return (
        <BoardListBox>
            {
                boardList.map(boardList => (
                    <Poster
                        id={boardList.id}
                        content={boardList.content}
                        tag={boardList.tag}
                        secret={boardList.secret}
                        createdAt={boardList.createdAt}
                        updatedAt={boardList.updatedAt}
                        userName={boardList.userName}
                        user={user ? user.id : null}
                        boardLike={boardList.boardLike}
                        file={boardList.file}
                    />
                ))
            }
        </BoardListBox>
    )
};

const propTypes = {
    user: PropTypes.object
};
const defaultProps = {
    user: false
};

BoardList.propTypes = propTypes;
BoardList.defaultProps = defaultProps;

export default graphql(
    BOARD_LIST,{
        props: ({ data }) => ({ ...data })
    }
)(withApollo(BoardList));