
import { Board } from '../models';
import { User } from '../models';
import Joi from 'joi';
import { writeSchema } from '../schemas';
import { boardLikeAuth } from '../action/auth';

export default {
    Query: {
        boardList: (root, args, {req}, info) => {

            return Board.find({});
        },
        boardListState: (root, { id }, {req}, info) => {
            
            return Board.findOne({ _id: id });
        }
    },
    Mutation: {
        boardWrite: async (root, args, { req, utils: { processUpload } }, info) => {
            const userId = req.session.userId;
            const user = await User.where('_id').in(userId);

            args.user = userId;
            args.userName = user[0].username;

            await Joi.validate(args, writeSchema, { abortEarly: false });

            // 파일 업로드
            const file = await processUpload(args.file);
            args.file = file;
            
            const boardWrite = await Board.create(args);

            return boardWrite;
        },
        boardLikeApi: async (root, { id, user }, { req }, info) => {
            const boardLikeApi = await boardLikeAuth(req, id, user);

            return boardLikeApi;
        }
    }
}