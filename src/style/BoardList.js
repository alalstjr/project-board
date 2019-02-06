import styled, {css} from 'styled-components';
import {ListStyle} from './globalStyles';

export const PosterGap = css`
    padding: 0 10px;
`;
export const BoardListBox = styled.div`
    width: 660px;
    float: left;
    ${ListStyle};
`;
export const PosterBox = styled.li`
    background-color: ${props => props.theme.contentColor};
    border: ${props => props.theme.borderSet};
    margin-bottom: 60px;
`;
export const PosterHeader = styled.div`
    padding: 15px;
    border-radius: 3px;
    border-bottom: ${props => props.theme.borderSet};
`;
export const PosterHeaderId = styled.h2`
    font-size: 16px;
`;
export const PosterHeaderLocal = styled.div`
    
`;
export const PosterImg = styled.img`
    width: 100%;
    height: 100%;
`;
export const PosterContent = styled.div`
    
`;
export const PosterEct = styled.div`
    padding: 10px;
`;
export const PosterViews = styled.div`
    ${PosterGap}
    font-weight: 600;
    margin-bottom: 8px;
`;
export const PosterPost = styled.div`
    ${PosterGap}
    padding-top: 8px;
    padding-bottom: 8px;
`;
export const PosteDate = styled.div`
    margin-bottom: 8px;
`;
export const PosterTag = styled.div`
    ${PosterGap}
`;
export const PosterComment = styled.div`
    ${PosterGap}
`;
export const PosterCommentBox = styled.ul`
    margin-bottom: 4px;
`;
export const PosterCommentList = styled.li`
    padding: 5px 0;
`;
export const PosterCommentWrite = styled.div`
    padding: 15px 10px;
    border-top: ${props => props.theme.borderSet};
`;
export const PosterCommentTextarea = styled.textarea.attrs({
    placeholder: 'Comment..'
})`
    resize: none;
    width: 100%;
    border: none;
    outline: none !important;
`;