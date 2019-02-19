import React, { Component } from 'react';
import PropTypes from 'prop-types';
// React-Router-v4
import { Link } from "react-router-dom";
// Style
import { HeaderBox, HeaderWrap, HeaderLogo, HeaderSearch, HeaderMybox, HeaderInput, HeaderSearchWrap, HeaderFix } from 'style/Header';
import { Container } from 'style/globalStyles';
import SVG from 'img/svg/SVG'

class Header extends Component {
    render() {
        const { userState, logout } = this.props

        const LogoutBox = (
            <button onClick={logout}>
                <SVG name='logout' width="2rem" height="60px" color="#000000" />
            </button>
        );
        const LoginBox = (
            <Link to='/login' >
                <SVG name='login' width="2rem" height="60px" color="#000000" />
            </Link>
        );

        return(
            <HeaderBox>
                <HeaderFix>
                    <Container>
                        <HeaderWrap>
                            <HeaderLogo>JJun-Pro</HeaderLogo>
                            <HeaderSearch>
                                <HeaderSearchWrap>
                                    <HeaderInput/>
                                </HeaderSearchWrap>
                            </HeaderSearch>
                            <HeaderMybox>
                                {userState ? LogoutBox : LoginBox}
                            </HeaderMybox>
                        </HeaderWrap>
                    </Container>
                </HeaderFix>
            </HeaderBox>
        )
    }
};

const propTypes = {
    userState: PropTypes.string,
    logout: PropTypes.func
};
const defaultProps = {
    userState : true,
    logout: () => { return '잘못된 접근입니다.' }
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;