import styled, { css } from 'styled-components';

export const HeaderHeight = css`
    height: 60px;
    line-height: 60px;
`;

export const HeaderBox = styled.div`
    ${HeaderHeight}
`;

export const HeaderFix = styled.div`
    position: fixed;
    width: 100%;
    background-color: ${props => props.theme.contentColor};
    border-bottom: ${props => props.theme.borderSet};
`;

export const HeaderWrap = styled.div`
    text-align: center;
    padding: 0 10px;
`;

export const HeaderLogo = styled.h1`
    ${HeaderHeight}
    float: left;
    font-family: 'Shadows Into Light', cursive;
`;

export const HeaderSearch = styled.div`
    display: inline-block;
    width: 215px;
    height: 60px;
    vertical-align: top;

    @media all and (max-width: 480px) {
        display: none;
    }
`;

export const HeaderSearchWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    min-height: 100%;
`;

export const HeaderMybox = styled.div`
    float: right;
    ${HeaderHeight}
`;

export const HeaderInput = styled.input.attrs({
    placeholder: '검색'
})`
    border-radius: 3px;
    border: ${props => props.theme.borderSet};
    padding: 3px 0 3px 15px;
    vertical-align: middle;
    height: 24px;
`;