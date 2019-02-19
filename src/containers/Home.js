import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { AUTH_LOGOUT } from 'module/Mutation'
// Header
import {Header, BoardList, MyList} from 'components';
// Style
import { Container } from 'style/globalStyles';
import { Tag, WriteHeaderPart } from 'style/Write';
// Js
import {sideFix, resizeFunc} from 'js/sidefix';
// Component
import Write from 'components/Write';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            writeView: false,
            writeText: '',
            tagText: '',
            tagSize: '1',
            tagList: []
        }

        // ESC 키를 누르십시오. 눌렀을 때 닫습니다.
        const listenEscKey = (e) => {
            if( this.state.writeView ) {
                e = e || window.event;
                if (e.keyCode === 27) {
                    this.handleWriteView();
                }
            }
        };
        // 인풋박스 뿐만아니라, 페이지 전체에서 ESC 키를 누르면 종료되도록 설정하였습니다.
        document.onkeydown = listenEscKey;
    }

    componentDidMount() {
        sideFix();
        resizeFunc();
    }
    componentWillUnmount() {
        let outEvent = true;
        resizeFunc(outEvent);
        // 메인페이지 이외에는 우측 사이드 이벤트 제거
        this.setState({
            writeView : false,  // 글쓰기 창 닫기
            writeText: ''       // 글쓰기 초기화
        });
    }

    logout = () => {
        this.props.signOut();
    }
    handleWriteView = () => {
        let writeSwitch = false;

        this.state.writeView ? writeSwitch = false : writeSwitch = true ;

        this.setState({
            writeView : writeSwitch
        });
    }
    handleText = (e) => {
        let keyword = e.target.value;
        
        this.setState({
            writeText: keyword
        });
    }
    handleTagText = (e) => {
        let keyword = (e.target.value).trim();
        let size = keyword.length ? keyword.length : '1';

        this.setState({
            tagText: keyword,
            tagSize: size
        });
    }
    handleTagEvent = (e) => {
        const { tagList, tagText } = this.state;
        
        if( (e.keyCode === 32 || e.keyCode === 13) && tagText ) {
            let tagVal = tagText;

            this.setState({
                tagList: tagList.concat(tagVal),
                tagText: ''
            });
        }
    }
    handleTagRemove = (arsd) => {
        const { tagList } = this.state;
        console.log(arsd)
        this.setState({
            tagList: tagList.filter( tag => tag !== arsd)
        });

        console.log(tagList)
    }

    render() {
        const { userState, user } = this.props;
        const { writeView } = this.state;

        return (
            <React.Fragment>
                <Header 
                    userState={userState} 
                    logout={this.logout}
                />
                <Container 
                    listTop={true} 
                >
                    <BoardList/>
                    <MyList 
                        user={user} 
                        handleWriteView={this.handleWriteView}
                    />
                </Container>
                {writeView ? <Write 
                    handleWriteView={this.handleWriteView} 
                    user={user} 
                    handleText={this.handleText}
                    handleTagText={this.handleTagText}
                    writeText={this.state.writeText}
                    tagText={this.state.tagText}
                    tagSize={this.state.tagSize}
                    tagList={this.state.tagList}
                    handleTagEvent={this.handleTagEvent}
                    handleTagRemove={this.handleTagRemove}
                /> : ''}
            </React.Fragment>
        );
    }
}

const propTypes = {
    userState: PropTypes.string,
    user: PropTypes.object
};
const defaultProps = {
    userState : true,
    user: true
    // user: null
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default graphql(
    AUTH_LOGOUT,{
        name: 'signOut',
        options: {
            refetchQueries: [
                'userAuth'
            ]
        }
    }
)(Home);