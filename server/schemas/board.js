import Joi from 'joi';

const content = Joi.string().required().label('Content');
const user = Joi.string().required().label('User');
const userName = Joi.string().required().label('UserName');
const tag = Joi.array().label('tag');
const secret = Joi.bool().label('secret');
const file = Joi.object().label('file');

export const writeSchema = Joi.object().keys({
    content,
    user,
    userName,
    tag,
    secret,
    file
});