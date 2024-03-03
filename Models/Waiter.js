const mongoose = require('mongoose');


const waiterSchema = new mongoose.Schema({
   name:String,
   picture:String,
   customersToServe:
   {
    customersToServe: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Customer'
       }]
   }
})


module.exports = mongoose.model('Waiter', waiterSchema);
