import mongoose from 'mongoose';
import { UserInputError } from 'apollo-server-express';
import { User } from '../models';

export default {
    Query: {
        users: (root, args, context, info) => {
            // TODO: auth, projection, pagination

            return User.find({})
        },
        user: (root, { id }, context, info) => {
            // TODO: auth, projection, sanitization

            if( !mongoose.Types.ObjectId.isValid(id) ) {
                throw new UserInputError(`UserID: ${id} 가 존재하지 않습니다.`);
            }

            return User.findById(id);
        }
    },
    Mutation: {
        singUp: (root, args, context, info) => {

            const password = args.password

            return User.create(args);
        }
    }
}