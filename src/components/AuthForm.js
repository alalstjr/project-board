import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';

import { FormGroup, Label, Input, FormBox } from 'style/Form';
import { AuthTitle, AuthWrap, AuthList } from 'style/Auth';

import { AUTH_SIGNUP, AUTH_SIGNIN } from "module/Mutation";

class AuthForm extends Component {
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
    submitForm = () => {
        const { email, username, password } = this.state;

        if( this.props.auth ) {
            this.props.signIn({
                variables: { email, password }
            })
            .then(({ data }) => {
                this.props.history.push("/");
            })
            .catch(error => {
                console.log(error);
            })
        } else {
            this.props.signUp({
                variables: { email, username, password }
            })
            .then(({ data }) => {
                this.props.history.push("/");
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    render() {
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

        return (
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
                <AuthWrap>
                    <Input 
                        bgColor='pink' 
                        type='submit' 
                        value={this.props.auth ? '로그인' : '가입'} 
                        onClick={this.submitForm}
                    />
                    <AuthList bgColor='gray'>
                        {this.props.auth ? '계정이 있으신가요?' : '계정이 없으신가요?'}
                        <Link to={this.props.auth ? '/register' : '/login'}>
                            {this.props.auth ? '회원가입' : '로그인'}
                        </Link>
                    </AuthList>
                </AuthWrap>
            </React.Fragment>
        )
    }
}

export default withRouter(
    compose(
        graphql(
            AUTH_SIGNIN,{
                name: 'signIn',
                options: {
                    refetchQueries: [
                        'userAuth'
                    ]
                    // refetchQueries: [{
                    //     query: queryName
                    // }]
                }
            }
        ),
        graphql(
            AUTH_SIGNUP,{
                name: 'signUp',
                options: {
                    refetchQueries: [
                        'userAuth'
                    ]
                }
            }
        )
    )(AuthForm)
);