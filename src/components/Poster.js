import React from 'react';
import PropTypes from 'prop-types';
// Style
import {PosterBox, PosterHeader, PosterImg, PosterContent, PosterComment, PosterHeaderId, PosterHeaderLocal, PosterEct, PosterTag, PosterViews, PosterCommentBox, PosterCommentList, PosterCommentWrite, PosterCommentTextarea, PosterPost, PosteDate, Tags } from 'style/BoardList';
import { UserName } from '../style/globalStyles';
import TimeAgo from 'react-timeago';
// graphQL
import Like from 'components/Like';

const Poster = ({ id, content, tag, secret, createdAt, updatedAt, userName, user, boardLike, file }) => {
    const tags = tag.map(
        data => (<Tags key={data.index}>#{data}</Tags>)
    );
    const nowLike = boardLike.length;

    return(
        <PosterBox>
            <PosterHeader>
                <PosterHeaderId>{userName}</PosterHeaderId>
                <PosterHeaderLocal>local</PosterHeaderLocal>
            </PosterHeader>
            <PosterImg src={file[0].path}/>
            <PosterContent>
                <Like 
                    id={id}
                    user={user} 
                    nowLike={nowLike}
                    boardLike={boardLike}
                    likeState={boardLike.indexOf(user) === 0 ? true : false}
                />
                <PosterPost>
                    <UserName>{userName}</UserName>
                    {content}
                </PosterPost>
                <PosterTag>
                    {tags}
                </PosterTag>
                <PosterComment>
                    <PosterCommentBox>
                        <PosterCommentList>
                            sweet__army
                            @faster.xx
                        </PosterCommentList>
                        <PosterCommentList>
                            vintageboy01
                            @hanbyulv_v 오떤거 같음?
                        </PosterCommentList>
                    </PosterCommentBox>
                    <PosteDate>
                        <TimeAgo date={createdAt} live={true}/>
                    </PosteDate>
                </PosterComment>
                <PosterCommentWrite>
                    <PosterCommentTextarea placeholder='Comment..' />
                </PosterCommentWrite>
            </PosterContent>
        </PosterBox>
    );
}

const propTypes = {
    id: PropTypes.string,
    content: PropTypes.string,
    tag: PropTypes.array,
    secret: PropTypes.bool,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    userName: PropTypes.string,
    user: PropTypes.string,
    boardLike: PropTypes.func,
    file: PropTypes.array
};
const defaultProps = {
    id: null,
    content: null,
    tag: [],
    secret: false,
    createdAt: null,
    updatedAt: null,
    userName: null,
    user: null,
    boardLike: () => console.warn(`not defined`),
    file: []
};

Poster.propTypes = propTypes;
Poster.defaultProps = defaultProps;

export default Poster;