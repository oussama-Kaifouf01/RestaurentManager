const mongoose = require('mongoose');



const orderItemSchema = new mongoose.Schema({
    meal:
    {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Meal'
    }
    ,
    quantity:Number,
    price:Number
})


module.exports = mongoose.model('OrderItem', orderItemSchema);
