import styled, {css} from 'styled-components';
import {ListStyle} from './globalStyles';

export const AuthContainer = styled.div`
    display: table;
    height: 100vh;
    width: 100%;
`;
export const AuthContent = styled.div`
    display: table-cell;
    vertical-align: middle;
`;
export const AuthBox = styled.div`
    max-width: 400px;
    margin: 0 auto;    
`;
export const AuthTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
    text-align: left;
`;

export const AuthWrap = styled.div`
    margin-top: 15px;
`;
export const AuthList = styled.div`
    background-color: ${props => props.bgColor};
    text-align: center;
    padding: 15px;
    font-size: 16px;
`;