import styled from 'styled-components';
import { BoxGap, UpDownGap } from './globalStyles';

export const WriteWrap = styled.div`
    position: relative;
`;
export const WriteBack = styled.div`
    position: fixed;
    z-index: 1000;
    background-color: rgba(0,0,0);
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0.6;
`;
export const WriteBox = styled.div`
    z-index: 1001;
    position: fixed;
    width: 600px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: ${props => props.theme.borderRadius};
`;
export const WriteHeader = styled.div`
    padding: 8px 0;
    overflow: hidden;  
    border-bottom: ${props => props.theme.borderSet};
`;
export const WriteHeaderPart = styled.div`
    float: left;
    padding: 0 10px;
`;
export const WriteCommentWrite = styled.div`
    height: 125px;
    padding: 10px 0 10px 10px;
`;
export const TagList = styled.ul`
    ${BoxGap}
    ${UpDownGap}
`;
export const TagBtn = styled.li`
    background-color: ${props => props.theme.btnColor};
    display: inline-block;
    padding: 7px 10px;
    margin-right: 10px;
    border-radius: 10px;
    font-weight: bold;
    color: #4b4f56;
    cursor: pointer;
    &:hover {
        background-color: #dadada
    }
`;
export const TagBox = styled.div`
    ${BoxGap}
    ${UpDownGap}
`;
export const Tag = styled.div`
    padding: 8px;
    border: 1px solid #Ddd;
    cursor: text;

`;
export const TagPart = styled.span`
    border-radius: ${props => props.theme.borderRadius};
    padding: 3px 0px 3px 10px;
    background-color: ${props => props.theme.PostBtnOn};
    color: #fff;
    font-weight: bold;
    margin-right: 5px;
    margin-bottom: 5px;
    display: inline-block;
`;
export const SecretOption = styled.div`
    ${BoxGap}
    ${UpDownGap}
`;
export const SecretBox = styled.div`
    display:inline-block;
    padding: 5px 15px;
    cursor: pointer;
    font-weight: bold;
    border: ${props => props.theme.borderSet};
    ${props => props.secret ? 'border-color: #ff3b80' :  '' };
    ${props => props.secret ? 'color: #fff' :  '' };
    background-color: ${props => props.secret ? '#ff3b80' :  '#ffffff' };
    border-radius: ${props => props.theme.borderRadius};
`;
export const WritePost = styled.div`
    ${BoxGap}
    ${UpDownGap}
`;