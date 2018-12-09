const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  ImageSchema= new Schema({

    _id: mongoose.Schema.Types.ObjectId,

});


module.exports = mongoose.model('Image', ImageSchema);

