const Product = require('../models/productModel');
const mongoose = require('mongoose');
const Bag = require('../models/bagModel');
const Schema = mongoose.Schema;


const OrderSchema = new Schema({
 // user: Schema.Types.ObjectId,
  //  totalCost:{type : "Number"},
    dateOfOrder: {type: "String"},
    dateOfRealisation: {type: "String"},
    meansOfPayment: {type: "String"}

});

const UserSchema  = new Schema({
    name : {type : String},
    surname : {type: String},
    username : {type: String},
    password: {type: String},
    deliveryAddress : {type: String},
    orders: {type: [OrderSchema], required: false},
    bag: {type: Schema.Types.ObjectId, ref: "Bag"}
});

module.exports = mongoose.model('Users', UserSchema);
