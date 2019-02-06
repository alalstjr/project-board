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