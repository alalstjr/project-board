import React, {Component} from 'react';
// Style
import {PosterBox, PosterHeader, PosterImg, PosterContent, PosterComment, PosterHeaderId, PosterHeaderLocal, PosterEct, PosterTag, PosterViews, PosterCommentBox, PosterCommentList, PosterCommentWrite, PosterCommentTextarea, PosterPost, PosteDate} from 'style/BoardList';
import SVG from 'img/svg/SVG'

class Poster extends Component {
    render() {
        return(
            <PosterBox>
                <PosterHeader>
                    <PosterHeaderId>ID</PosterHeaderId>
                    <PosterHeaderLocal>local</PosterHeaderLocal>
                </PosterHeader>
                <PosterImg src={require("../img/test.jpg")}/>
                <PosterContent>
                    <PosterEct>
                        <SVG name="heart" width="2rem" height="2rem" color="#000000" />
                        <SVG name="heartCk" width="2rem" height="2rem" color="#e74c3c" />
                    </PosterEct>
                    <PosterViews>조회수 000회</PosterViews>
                    <PosterPost>ID 내용</PosterPost>
                    <PosterTag>
                        minsang__98
                        #dailylook#데일리#인친#instagram#셀피#selfie#셀카그램#첫줄#소확행#맞팔환영#인스타그램#선팔하면맞팔#ootd#팔로우#고딩스타그램#좋아요#좋아요반사#인스타#소통#일상#f4f#99#00#01#02#
                    </PosterTag>
                    <PosterComment>
                        <PosterCommentBox>
                            <PosterCommentList>
                                sweet__army
                                @faster.xx
                            </PosterCommentList>
                            <PosterCommentList>
                                vintageboy01
                                @hanbyulv_v 오떤거 같음?
                            </PosterCommentList>
                        </PosterCommentBox>
                        <PosteDate>10시간전</PosteDate>
                    </PosterComment>
                    <PosterCommentWrite>
                        <PosterCommentTextarea />
                    </PosterCommentWrite>
                </PosterContent>
            </PosterBox>
        );
    }
}

export default Poster;