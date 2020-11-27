import mongoose from "mongoose";
const Schema = mongoose.Schema;

const category = new Schema({
    name : {
        type: String,
        required: true
    },
}, { collection: 'categories' });

export default mongoose.model('categories', category);