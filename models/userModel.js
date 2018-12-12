const Product = require('../models/productModel');
const mongoose = require('mongoose');
const Bag = require('../models/bagModel');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const OrderSchema = new Schema({
    // user: Schema.Types.ObjectId,
    //  totalCost:{type : "Number"},
    dateOfOrder: {type: "String"},
    dateOfRealisation: {type: "String"},
    meansOfPayment: {type: "String"}

});

const UserSchema  = new Schema({
    name : {type : String},
    email: {type : String, unique: true, required: true,match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    surname : {type: String},
    username : {type: String, unique: true},
    password: {type: String, required: true},
    orders: {type: [OrderSchema], required: false},
    bag: {type: Schema.Types.ObjectId, ref: "Bag"},
    address: {type: Schema.Types.ObjectId, required: false, ref: "Address"}
});


module.exports = mongoose.model('Users', UserSchema);