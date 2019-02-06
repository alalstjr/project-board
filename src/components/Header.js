import React from 'react';
// React-Router-v4
import { Link } from "react-router-dom";
// Style
import { HeaderBox, HeaderWrap, HeaderLogo, HeaderSearch, HeaderMybox, HeaderInput, HeaderSearchWrap, HeaderFix } from 'style/Header';
import { Container } from 'style/globalStyles';
import SVG from 'img/svg/SVG'

const Header = () => (
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
                        <Link to='/login'>
                            <SVG name="login" width="2rem" height="60px" color="#000000" />
                        </Link>
                    </HeaderMybox>
                </HeaderWrap>
            </Container>
        </HeaderFix>
    </HeaderBox>
);

export default Header;