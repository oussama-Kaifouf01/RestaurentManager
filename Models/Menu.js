const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    meals:
    {
        meals: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Meal'
        }]
    }
})


module.exports = mongoose.model('Menu', menuSchema);
