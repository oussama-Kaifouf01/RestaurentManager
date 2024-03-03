const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
    name:String
}
)

module.exports = mongoose.model('Manager', managerSchema);
