const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name:String,
    picture:String,
    price:Number,
    ingredients: [String],
    category:String
});

module.exports = mongoose.model('Meal', mealSchema);
