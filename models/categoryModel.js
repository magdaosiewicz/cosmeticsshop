const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
    nameOfCategory: {type: String}

});

module.exports = mongoose.model('Category', CategorySchema);
