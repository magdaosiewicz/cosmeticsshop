//const descriptionOfProduct = require('../models/descriptionOfProductModel');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
    nameOfCategory: {type: String}

});


const ProductSchema = new Schema({
    nameOfProduct: {type: String, required: [true, 'Name is required!'], max: 100},
    numberOfPieces: {type: Number, required: false},
    aboutProduct: {type: String, required: true, max: 1000},
    ingredients: {type: String, required: true},
    recommendation: {type: String, required: false},
    price: {type: Number, required: true},
    category: {type: Schema.Types.ObjectId, required: false, ref: "Category"},
    productImage: { type: String, required: true }

    //category: {CategorySchema}


});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);
