import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
// Style
import { AuthBox } from 'style/Auth';
import { FormGroup, Label, Input, FormBox } from 'style/From';
import { AuthContainer, AuthContent, AuthTitle, AuthWrap, AuthList } from 'style/Auth';

import { Mutation } from "react-apollo";
import { AUTH_SIGNUP, AUTH_SIGNIN } from "module/Mutation";

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    handleEmail = (e) => {
        let keyword = e.target.value;

        this.setState({
            email: keyword
        })
    }
    handleName = (e) => {
        let keyword = e.target.value;

        this.setState({
            username: keyword
        })
    }
    handlePassword = (e) => {
        let keyword = e.target.value;

        this.setState({
            password: keyword
        })
    }

    render() {
        const LoginView = (
            <AuthWrap>
                <Input bgColor='pink' type='submit' value='로그인' />
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
                <Input bgColor='pink' type='submit' value='가입' />
                <AuthList bgColor='gray'>
                    계정이 있으신가요?
                    <Link to='/login'>
                        로그인
                    </Link>
                </AuthList>
            </AuthWrap>
        );
        const RegisterInput = (
            <FormGroup margin='15px'>
                <Label>이름</Label>
                <Input 
                    type='text' 
                    onChange={this.handleName}
                    value={this.state.username}
                />
            </FormGroup>
        );

        const FromBox = (
            <React.Fragment>
                <AuthTitle>{this.props.auth ? 'Login' : 'Register'}</AuthTitle>
                <FormBox padding='15px'>
                    <FormGroup margin='15px'>
                        <Label>아이디</Label>
                        <Input 
                            type='text' 
                            onChange={this.handleEmail}
                            value={this.state.email}
                        />
                    </FormGroup>

                    {this.props.auth ? '' : RegisterInput}

                    <FormGroup margin='15px'>
                        <Label>비밀번호</Label>
                        <Input 
                            type='password' 
                            onChange={this.handlePassword}
                            value={this.state.password}
                        />
                    </FormGroup>
                </FormBox>
                {this.props.auth ? LoginView : RegisterView}
            </React.Fragment>
        );

        const LoginBox = (
            <Mutation mutation={AUTH_SIGNIN}>
                {(signIn, { data, loading, error }) => {
                    return (
                    <form
                        onSubmit={async e => {
                            e.preventDefault()
                            const { email, password } = this.state;
                            await signIn({
                                variables: { email, password },
                            })
                            if( error ) {
                                alert('입력하신 정보가 잘못되었습니다.');
                                return;
                            }
                            this.props.history.push("/");
                        }}
                    >
                        {FromBox}
                    </form>
                    )
                }}
            </Mutation>
        );
        const RegisterBox = (
            <Mutation mutation={AUTH_SIGNUP}>
                {(signUp, { data, loading, error }) => {
                    return (
                    <form
                        onSubmit={async e => {
                            e.preventDefault()
                            const { email, username, password } = this.state;
                            await signUp({
                                variables: { email, username, password },
                            })
                            if( error ) {
                                alert('입력하신 정보가 잘못되었습니다.');
                                return;
                            }
                            this.props.history.push("/");
                        }}
                    >
                        {FromBox}
                    </form>
                    )
                }}
            </Mutation>
        );

        return (
            <AuthContainer>
                <AuthContent>
                    <AuthBox>
                        {this.props.auth ? LoginBox : RegisterBox}
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
    auth: PropTypes.bool
};
const defaultProps = {
    auth : true
};

Auth.propTypes = propTypes;
Auth.defaultProps = defaultProps;

export default withRouter(Auth); 