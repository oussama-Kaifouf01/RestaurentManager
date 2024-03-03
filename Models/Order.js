const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderItems:
    {
        orderItems: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'OrderItem'
        }]
    }
    ,
    totalPrice: Number
})
module.exports = mongoose.model('Order', orderSchema);
