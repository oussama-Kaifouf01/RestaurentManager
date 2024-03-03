const mongoose = require('mongoose');


const restaurentSchema = new mongoose.Schema({
    name: String,
    manager: {
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Manager'

    },
    menu: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Menu'
    },
    staff:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff'
    },
    customers:
    {
        customers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer'
        }] }
  });

  module.exports = mongoose.model('Restaurent', restaurentSchema);
