import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SecretBox, TagPart, WriteHeader, WriteWrap, WriteBack, WriteBox, TagList, TagBox, Tag, SecretOption, WritePost, WriteHeaderPart, WriteCommentWrite, TagBtn } from 'style/Write';
import { PosterCommentTextarea } from 'style/BoardList';
import { PostBtn } from 'style/globalStyles';
import { TagInput, CloseBtn } from 'style/Form';
// graphQL
import { graphql } from 'react-apollo';
import { BOARD_WRITE } from 'module/Mutation';

const tagFocus = () => {
    document.querySelector(`.${TagInput.componentStyle.componentId}`).focus();
}

class Write extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            file: null
        }
    }

    submitForm = async () => {
        // 게시판 작성
        const { writeText, tagList, secret, handleWriteReset } = this.props;
        // 파일 업로드
        const { file } = this.state;

        await this.props.boardWrite({
            variables: { writeText, tagList, secret, file }
        })
        .then(({ data }) => {
            handleWriteReset();
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleFile = (e) => {
        this.setState({
            file: e.target.files[0]
        })
    }

    render() {
        const { 
            secret,
            handleSecret, 
            handleTagRemove, 
            handleWriteView, 
            user, 
            handleText, 
            writeText, 
            tagText, 
            tagSize, 
            handleTagText, 
            handleTagEvent, 
            tagList 
        } = this.props;

        const tags = tagList.map(
            (tag, index) => (
                <TagPart key={index}>
                    {tag}
                    <CloseBtn onClick={ () => handleTagRemove(tag)} key={index} >X</CloseBtn>
                </TagPart>
            )
        );

        return (
            <WriteWrap>
                <WriteBack onClick={handleWriteView} />
                <WriteBox>
                    <WriteHeader>
                        <WriteHeaderPart>글쓰기</WriteHeaderPart>
                        <CloseBtn onClick={handleWriteView} >X</CloseBtn>
                    </WriteHeader>
                    <WriteCommentWrite>
                        <PosterCommentTextarea 
                            placeholder={`${user.username}님은 어떤 생각을 하고 계신가요?`} 
                            value={writeText}
                            onChange={handleText}
                        />
                    </WriteCommentWrite>
                    <TagList>
                        <TagBtn>
                            사진추가
                            <input 
                                type="file"
                                onChange={this.handleFile}
                            />
                        </TagBtn>
                        <TagBtn>지도추가</TagBtn>
                        <TagBtn>영상추가</TagBtn>
                        <TagBtn>친구 태그하기</TagBtn>
                    </TagList>
                    <TagBox>
                        <Tag
                            onClick={tagFocus}
                        >
                            {tags}
                            <TagInput
                                type="text"
                                onChange={handleTagText}
                                value={tagText}
                                size={tagSize}
                                onKeyDown={handleTagEvent}
                            />
                        </Tag>
                    </TagBox>
                    <SecretOption>
                        <SecretBox
                            onClick={handleSecret} 
                            secret={secret} 
                        >비밀글 설정</SecretBox>
                    </SecretOption>
                    <WritePost>
                        <PostBtn
                            postColor={writeText ? true : false }
                            cursorState={writeText ? 'pointer' : 'unset' }
                            postState={writeText ? true : false }
                            onClick={writeText ? this.submitForm : null }
                        >작성하기</PostBtn>
                    </WritePost>
                </WriteBox>
            </WriteWrap>
        );
    }
}

const propTypes = {
    handleWriteView: PropTypes.func,
    handleText: PropTypes.func,
    handleTagText: PropTypes.func,
    handleTagEvent: PropTypes.func,
    handleTagRemove: PropTypes.func,
    handleSecret: PropTypes.func,
    handleWriteReset: PropTypes.func,
    user: PropTypes.object,
    tagList: PropTypes.object,
    writeText: PropTypes.string,
    tagSize: PropTypes.string,
    tagText: PropTypes.string,
    secret: PropTypes.bool
};
const defaultProps = {
    handleWriteView : () => { return console.log('잘못된 전달입니다.') },
    handleText : () => { return console.log('잘못된 전달입니다.') },
    handleTagText : () => { return console.log('잘못된 전달입니다.') },
    handleTagEvent : () => { return console.log('잘못된 전달입니다.') },
    handleTagRemove : () => { return console.log('잘못된 전달입니다.') },
    handleSecret : () => { return console.log('잘못된 전달입니다.') },
    handleWriteReset : () => { return console.log('잘못된 전달입니다.') },
    user: null,
    tagList: null,
    writeText: '',
    tagSize: '1',
    tagText: '',
    secret: false
};

Write.propTypes = propTypes;
Write.defaultProps = defaultProps;

export default graphql(
    BOARD_WRITE,{
        name: 'boardWrite',
        options: {
            refetchQueries: [
                'boardList'
            ]
        }
    }
)(Write);