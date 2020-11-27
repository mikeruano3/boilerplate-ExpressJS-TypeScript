import mongoose from "mongoose";
const Schema = mongoose.Schema;

const product = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    sku: {
        type: String,
    },
    img: [{
        date_created: { type: String },
        date_created_gmt: { type: String },
        date_modified : { type: String },
        date_modified_gmt: { type: String },
        src: { type: String },
        name: { type: String },
        alt: { type: String }
    }],
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'categories'
    }],
    attributes: [{
        name:  { type: String },
        position:  { type: Number },
        visible:  { type: Boolean },
        variation:  { type: Boolean },
        options: [{
            type: String
        }]
    }],
    cost: { type: Number },
    regular_price: { type: Number },
    sale_price: { type: Number },
    total_sales: { type: Number, },
    stock: { type: Number, }
},
{ collection: 'products' });

export default mongoose.model('products', product);