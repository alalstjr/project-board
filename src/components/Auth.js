import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Style
import { AuthBox } from 'style/Auth';
import { FormGroup, Label, Input, FormBox } from 'style/From';
import { AuthContainer, AuthContent, AuthTitle, AuthWrap, AuthList } from 'style/Auth';

class Auth extends Component {
    render() {

        const LoginView = (
            <AuthWrap>
                <AuthList bgColor='pink'>로그인</AuthList>
                <AuthList bgColor='gray'>
                    계정이 없으신가요?
                    <Link to='/register'>
                        회원가입
                    </Link>
                </AuthList>
            </AuthWrap>
        );
        const RegisterView = (
            <AuthWrap>
                <AuthList bgColor='pink'>가입</AuthList>
                <AuthList bgColor='gray'>
                    계정이 있으신가요?
                    <Link to='/login'>
                        로그인
                    </Link>
                </AuthList>
            </AuthWrap>
        );

        return (
            <AuthContainer>
                <AuthContent>
                    <AuthBox>
                        <AuthTitle>{this.props.auth ? 'Login' : 'Register'}</AuthTitle>
                        <FormBox padding='15px'>
                            <FormGroup margin='15px'>
                                <Label>아이디</Label>
                                <Input type='text' />
                            </FormGroup>
                            <FormGroup margin='15px'>
                                <Label>비밀번호</Label>
                                <Input type='password' />
                            </FormGroup>
                        </FormBox>
                        {this.props.auth ? LoginView : RegisterView}
                    </AuthBox>
                </AuthContent>
            </AuthContainer>
        )
    }
}

const warning = (funcName) => {
    return () => console.warn(`${funcName} is not defined`);
}
const propTypes = {
    mode: PropTypes.bool
};
const defaultProps = {
    mode : true
};

Auth.propTypes = propTypes;
Auth.defaultProps = defaultProps;

export default Auth;