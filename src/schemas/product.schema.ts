import mongoose from "mongoose";
const Schema = mongoose.Schema;
import moment from "moment";

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
    /*
    img: [
        {
            date_created: { type: String },
            date_created_gmt: { type: String },
            date_modified : { type: String },
            date_modified_gmt: { type: String },
            src: { type: String },
            name: { type: String },
            alt: { type: String }
        ]
    categories: [{ "id": 21, "name": "Accesorios" }],
    "attributes": [
        {
        "id": 0,
        "name": "TALLA",
        "position": 0,
        "visible": true,
        "variation": false,
        "options": [ "Grande"  ]
    }
],
"cost": "200",
"regular_price": "200",
"sale_price": "", // !sale_price_option = regular_price,
"total_sales": 0,
"total_sales": 0,
stock: 23


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
    }*/
}, { collection: 'products' });

export default mongoose.model('products', product);