import mongoose from 'mongoose';

const boardSchema = new mongoose.Schema({
    content: String,
    tag: [String],
    secret: Boolean,
    createdAt: String,
    user: String,
    userName: String,
    boardLike: [String],
    file: [Object]
},{
    timestamps: true
});

const Board = mongoose.model('Board', boardSchema);

export default Board;