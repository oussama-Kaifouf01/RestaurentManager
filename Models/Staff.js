const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({
   chief:
   {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Chief'
   }
   ,
   waiters:
   {
    waiters: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Waiter'
       }]
   }
})


module.exports = mongoose.model('Staff', staffSchema);
