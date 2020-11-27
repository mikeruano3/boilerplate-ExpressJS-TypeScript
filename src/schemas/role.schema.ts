import mongoose from "mongoose";
const Schema = mongoose.Schema;
import moment from "moment";

const role = new Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    roleType : {
        type: Number,
        required: true
    }
}, { collection: 'roles' });

export default mongoose.model('roles', role);