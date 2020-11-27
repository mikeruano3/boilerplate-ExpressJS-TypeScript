import mongoose from "mongoose";
const Schema = mongoose.Schema;

const sale = new Schema({
    detalle: [{
        idProducto: { type: String },
        amount: { type: Number },
        price_x_prod: { type: Number },
        total: { type: Number },
    }],
    sale_total: {
        type: Number,
    },
    idconsignacion: {
        type: Schema.Types.ObjectId,
        ref: 'consignments'
    },
    date_sale: {
        type: String
    },
    idclient: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    rest: { type: Number },
},
{ collection: 'sales' });

export default mongoose.model('sales', sale);