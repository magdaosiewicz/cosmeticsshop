const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    country: {type: String, required: [false, 'Country is required!'], max: 100},
    city: {type: String, required: [false, 'City is required!'], max: 100},
    streetAddress: {type: String, required: false},
    houseNumber: {type: Number, required: false},  //numer mieszkania lub domu
    province: {type: String, required: false, max: 1000},
    postCode: {type: Number, required: false},
});

//Export the model
module.exports = mongoose.model('Address', AddressSchema);
