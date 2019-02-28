import React, { Fragment, Component } from 'react';
import { PosterEct, PosterViews } from 'style/BoardList';
import SVG from 'img/svg/SVG';
import PropTypes from 'prop-types';
// graphQL
import { graphql, withApollo } from 'react-apollo';
import { BOARD_LIKE } from 'module/Mutation';

class Like extends Component {
    constructor(props) {
        super(props);

        this.state = {
            like: this.props.nowLike,
            likeState: this.props.likeState
        }
    }

    render() {
        const { id, user, boardLikeApi, loading } = this.props;
        const { likeState, like } = this.state;

        let likeLength;
        let likeStateBool;
    
        const handleBoardLike = async ( id, user ) => {

            const likeApi = await boardLikeApi({
                variables: { id, user }
            });
            
            likeLength = likeApi.data.boardLikeApi.boardLike.length;

            const likeObject = likeApi.data.boardLikeApi.boardLike;

            likeObject.indexOf(user) === 0 ? likeStateBool = true : likeStateBool = false;

            this.setState({
                like: likeLength,
                likeState: likeStateBool
            });
        }
        
        if(loading) return null;

        return (
            <Fragment>
                <div>
                    <PosterEct
                        onClick={() => handleBoardLike(id, user)}
                    >
                        <SVG 
                            name={likeState ? "heartCk" : "heart"} 
                            width="2rem" 
                            height="2rem" 
                            color={likeState ? "#e74c3c" : "#000000"} 
                        />
                    </PosterEct>
                    <PosterViews>좋아요 {like} 개</PosterViews>
                </div>
            </Fragment>           
        );
    }
}

const propTypes = {
    id: PropTypes.string,
    user: PropTypes.object,
    nowLike: PropTypes.number,
    boardLike: PropTypes.array,
    likeState: PropTypes.bool
};
const defaultProps = {
    id: null,
    user: false,
    nowLike: null,
    boardLike: [],
    likeState: false
};

Like.propTypes = propTypes;
Like.defaultProps = defaultProps;

export default graphql(
        BOARD_LIKE,{
            name: 'boardLikeApi'
        }
    )
(withApollo(Like));