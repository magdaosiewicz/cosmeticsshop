const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    nameOfProduct: {type: String, required: [false, 'Name is required!'], max: 100},
    numberOfPieces: {type: Number, required: false},
    aboutProduct: {type: String, required: false, max: 1000},
    ingredients: {type: String, required: false},
    recommendation: {type: String, required: false},
    price: {type: Number, required: false}

});

const BagSchema= new Schema({
//    products: [{type: Schema.Types.ObjectId, ref: "Product", require: false}],
    products: {type: [ProductSchema], required: false},
    cost: {type: "Number"}
});

module.exports = mongoose.model('Bag',BagSchema);