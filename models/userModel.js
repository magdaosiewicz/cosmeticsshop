const Product = require('../models/productModel');
const mongoose = require('mongoose');
const Bag = require('../models/bagModel');
const Schema = mongoose.Schema;
var bcrypt= require('bcrypt');
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
    email: {type : String, unique: true, required: true},
    surname : {type: String},
    username : {type: String, unique: true},
    password: {type: String, required: true},
    orders: {type: [OrderSchema], required: false},
    bag: {type: Schema.Types.ObjectId, ref: "Bag"},
    address: {type: Schema.Types.ObjectId, required: false, ref: "Address"}
});

UserSchema.methods.encryptPassword =function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync((5),null));
};
UserSchema.methods.validPassword=function (password) {
    return bcrypt.compareSync(password,this.password);
};

module.exports = mongoose.model('Users', UserSchema);
