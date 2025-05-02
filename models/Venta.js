
const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    fecha: String,
    vendedor: String,
    cliente: String,
    tipo: String,
    cantidad: Number,
    precio: Number,
    total: Number,
    estadoPago: {
        type: String,
        enum: ['pagado', 'pendiente'],
        default: 'pendiente'
    }
}, { timestamps: true });

module.exports = mongoose.model('Venta', ventaSchema);
