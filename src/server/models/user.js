import mongoose from 'mongoose';
import { hash } from 'bcryptjs';

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    name: String,
    createdAt: String,
    password: String
}, {
    timestamps: true
    // createdAt 과 updatedAt 칼럼을 추가한다.
    // createdAt 과 updatedAt 칼럼 은 만든 (시간) 을 등록하는것 
    // ex) "$date": "2019-02-06T17:01:20.000Z"
});

userSchema.pre('save', async function (next) {
    if( this.isModified('password') ){
        try {
            this.password = await hash(this.password, 10) // args.password
        } catch (err) {
            next(err);
        }
    }
    next();
});

export default mongoose.model('User', userSchema);