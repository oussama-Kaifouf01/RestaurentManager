const mongoose = require('mongoose');



const customerSchema = new mongoose.Schema({
    order:
    {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Order'
    }
    ,
    isComplain: Boolean
})


module.exports = mongoose.model('Customer', customerSchema);
