const mongoose = require('mongoose');

const kitchenStaffSchema = new mongoose.Schema({
    name:String,
    ordersToFullfill:
   {
    ordersToFullfill: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Order'
       }]
   }
   
})
module.exports = mongoose.model('KitchenStaff', kitchenStaffSchema);
