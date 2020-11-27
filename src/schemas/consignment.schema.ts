import mongoose from "mongoose";
const Schema = mongoose.Schema;

const consignment = new Schema({
    idCliente: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    idProducto: {
        type: Schema.Types.ObjectId,
        ref: 'products'
    },
    status: {
        type: Number,
    },
    stock_in:  {
        type: Number,
    },
    stock_out: {
        type: Number,
    },
    sale_price_consig: {
        type: Number,
    },
    sale_price_option: {
        type: Schema.Types.ObjectId,
        ref: 'saleprices'
    },
    date_out: {
        type: String,
    },
    date_in: {
        type: String,
    }
},
{ collection: 'consignments' });

export default mongoose.model('consignments', consignment);