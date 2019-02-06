import React, { Component } from 'react';
// Header
import {Header, BoardList, MyList} from 'components';
// Style
import { Container } from 'style/globalStyles';
// Js
import {sideFix, resizeFunc} from 'js/sidefix';

class Home extends Component {

    componentDidMount() {
        sideFix();
        resizeFunc();
    }
    componentWillUnmount() {
        let outEvent = true;
        resizeFunc(outEvent);
        // 메인페이지 이외에는 우측 사이드 이벤트 제거
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Container listTop={true} >
                    <BoardList />
                    <MyList/>
                </Container>
            </React.Fragment>
        );
    }
}

export default Home;