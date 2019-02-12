import mongoose, { Schema } from 'mongoose';
import { hash, compare } from 'bcryptjs';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: email => User.doesntExist({ email }),
            message: ({ value }) => `Email ${value} 은 이미 존재합니다.`
        }
    },
    createdAt: String,
    password: String
},{
    timestamps: true
});

userSchema.pre('save', async function (next) {

    if( this.isModified('password') ) {
        try {
            this.password = await hash(this.password, 10);
        } catch(err) {
            next(err);
        }
    }

    next()
})

userSchema.statics.doesntExist = async function(option) {
    return await this.where(option).countDocuments() === 0;
}
userSchema.methods.matchesPassword = async function(password) {
    return await compare(password, this.password);
}

const User = mongoose.model('User', userSchema);

export default User;