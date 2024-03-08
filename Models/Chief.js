const mongoose = require('../config/db');


const chiefSchema = new mongoose.Schema({
   name:String,
   picture:String,
   kitchenStaffs:
   {
    kitchenStaffs: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'KitchenStaff'
       }]
   }
   ,
   ordersToFullfill:
   {
    ordersToFullfill: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Order'
       }]
   }
})


module.exports = mongoose.model('Chief', chiefSchema);
