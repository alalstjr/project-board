import { AuthenticationError } from 'apollo-server-express';
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
})