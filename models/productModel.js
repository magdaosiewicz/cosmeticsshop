//const descriptionOfProduct = require('../models/descriptionOfProductModel');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    nameOfProduct: {type: String, required: [true, 'Name is required!'], max: 100},
    numberOfPieces: {type: Number, required: false},
    aboutProduct: {type: String, required: true, max: 1000},
    ingredients: {type: String, required: true},
    recommendation: {type: String, required: false},
    price: {type: Number, required: true}

});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);
//const Product = mongoose.model('Product', ProductSchema);
