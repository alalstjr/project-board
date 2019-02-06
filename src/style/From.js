import styled, {css} from 'styled-components';
import {ListStyle} from './globalStyles';

export const FormBox = styled.div`
    border: ${props => props.theme.borderSet};
    background-color: ${props => props.theme.contentColor}
    padding: ${props => props.padding}
`;
export const FormGroup = styled.div`
    margin-bottom: ${props => props.margin}
`;
export const Label = styled.label`
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: normal;
    display: block;
`;
export const Input = styled.input`
    border-radius: 3px;
    border: ${props => props.theme.borderSet};
    width: 100%;
    height: 26px;
    padding: 4px;
    box-sizing: border-box;
`;