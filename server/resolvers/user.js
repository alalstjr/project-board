
import { User } from '../models';
import Joi from 'joi';
import { signUp, signIn } from '../schemas';
import { attempSignIn, signOut } from '../action/auth';

export default {
    Query: {
        me: (root, args, {req}, info) => {

            return User.findById(req.session.userId);
        },
        user: (root, args, context, info) => {

            return User.findById(args.id);
        }
    },
    Mutation: {
        signUp : async (root, args, { req }, info) => {
            await Joi.validate(args, signUp, { abortEarly: false });

            const user = await User.create(args);
            
            req.session.userId = user.id

            return user;
        },
        signIn : async (root, args, { req }, info) => {
            await Joi.validate(args, signIn, { abortEarly: false });
            
            const user = await attempSignIn(args.email, args.password);
            
            req.session.userId = user.id

            return user;
        },
        signOut : async (root, args, { req, res }, info) => {
            return signOut(req, res);
        }
    }
}