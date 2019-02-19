import React from 'react'
import PropTypes from 'prop-types';
// Style
import { AuthBox } from 'style/Auth';
import { AuthContainer, AuthContent } from 'style/Auth';
import AuthForm from './AuthForm';

const Auth = ({ auth }) => {
    return (
        <AuthContainer>
            <AuthContent>
                <AuthBox>
                    <AuthForm auth={auth}/>
                </AuthBox>
            </AuthContent>
        </AuthContainer>
    );
};

const warning = (funcName) => {
    return () => console.warn(`${funcName} is not defined`);
}
const propTypes = {
    auth: PropTypes.bool
};
const defaultProps = {
    auth : true
};

Auth.propTypes = propTypes;
Auth.defaultProps = defaultProps;

export default Auth;