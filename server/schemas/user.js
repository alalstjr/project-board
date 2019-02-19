import Joi from 'joi';

const email = Joi.string().email().required().label('Email');
const username = Joi.string().min(2).max(30).required().label('Username');
const password = Joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).label('Password').options({
    language: {
        string: {
            regex: {
                base: '비밀번호에는 적어도 하나 이상의 문자와 8자 이상이여야 합니다.'
            }
        }
    }
})

export const signUp = Joi.object().keys({
    email,
    username,
    password
});

export const signIn = Joi.object().keys({
    email,
    password
});