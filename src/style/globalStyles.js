import styled, { createGlobalStyle, css } from 'styled-components';
import reset from './reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light');
    html {
        background-color: ${props => props.theme.backColor};
    }
    body { 
        font-family:'Noto-Sans';
        font-weight:300; 
        font-size: ${props => props.theme.fontSizeSm};
    }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    ${props => props.listTop ? 'padding-top: 40px;' : ''}
`;

export const ListStyle = css`
    padding:10px;
    box-sizing: border-box;
`;

export const BoxGap = css`
    padding-left: 10px;
    padding-right: 10px;
`;
export const UpDownGap = css`
    padding-top: 6px;
    padding-bottom: 6px;
`;
export const PostBtn = styled.button`
    cursor: ${props => props.cursorState};
    background-color: ${props => props.postColor ? props.theme.PostBtnOn : props.theme.PostBtnOff};
    border-radius: ${props => props.theme.borderRadius};
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    width: 100%;
    padding: 6px;
    transition: 0.6s all;
    outline: 0;
    border: 0;
    ${props => props.postState ? `&:hover{ background-color : ${props.theme.PostBtnHover} }` : ''}
`;
export const UserName = styled.div`
    font-weight: bold;
    margin-right: 10px;
    display: inline-block;
`;