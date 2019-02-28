import { AuthenticationError } from 'apollo-server-express';
import { Board } from '../models';
import { User } from '../models';
import { SESS_NAME } from '../config';

export const attempSignIn = async (email, password) => {
    const message = '이메일이 또는 비밀번호가 정확하지 않습니다.\n다시 시도해주세요.';
    const user = await User.findOne({ email });

    if( !user ){
        throw new AuthenticationError(message);
    }

    if( !await user.matchesPassword(password) ){
        throw new AuthenticationError(message);
    }

    return user;
}

const signedIn = req => req.session.userId;

export const ensureSignedIn = req => {
    if( !signedIn(req) ) {
        throw new AuthenticationError('로그인 해야합니다.');
    }
}

export const ensureSignedOut = req => {
    if( signedIn(req) ) {
        throw new AuthenticationError('이미 로그인 되어있습니다.');
    }
}

export const signOut = (req, res) => new Promise(
    (resolve, reject) => {
    req.session.destroy(err => {
        if (err) return(err)

        res.clearCookie(SESS_NAME)

        resolve(true);
    })
});

// Board Like Auth
export const boardLikeAuth = async (req, id, user) => {
    if( signedIn(req) !== user ) {
        throw new AuthenticationError('로그인한 사용자랑 다른 ID 값을 가지고 있습니다.');
    }

    const like = Board.findOne({_id : id});

    const boardLikeApi = await Board.findOne({ _id: id });
    const userState = boardLikeApi.boardLike.indexOf(signedIn(req));
    
    if( userState === -1 ) {
        await Board.updateOne({_id : id}, {
            $push: {
                boardLike: [signedIn(req)]
            }
        });
    } else {
        await Board.updateOne({_id : id}, {
            $pull: {
                boardLike: signedIn(req)
            }
        });
    }

    return like;
}