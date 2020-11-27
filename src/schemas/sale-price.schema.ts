import mongoose from "mongoose";
const Schema = mongoose.Schema;

const salePrice = new Schema({
    op: {
        type: String
    },
    description: {
        type: String
    },
    name: {
        type: String
    }
},
{ collection: 'saleprices' });

export default mongoose.model('saleprices', salePrice);