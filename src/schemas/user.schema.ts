import mongoose from "mongoose";
const Schema = mongoose.Schema;
import moment from "moment";

const users = new Schema({
    username : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    fullname : {
        type: String,
        required: true
    },
    image : {
        type: String
    },
    role : {
        type: Schema.Types.ObjectId,
        ref: 'roles',
        required: true
    },
    createdAt : {
        type: Date,
        default: moment().format()
    },
    passwordResetToken : {
        type: String
    },
    emailConfirmationToken : {
        type: String
    },
    verifiedEmailStatus : {
        type: Number,
        default: 0
    }
}, { collection: 'users' });

export default mongoose.model('users', users)