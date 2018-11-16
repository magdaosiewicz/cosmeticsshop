// app.js

const express = require('express');
const bodyParser = require('body-parser');
//////////////////////////////////////////////////////////////////////////
const product = require('./routes/productRoute'); // Imports routes for the products
const user = require('./routes/userRoute');
const order = require('./routes/orderRoute');
const bag = require('./routes/bagRoute');
const address = require('./routes/addressRoute');
/////////////////////////////////////////////////////////////////////////
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://ela:ela123@ds151533.mlab.com:51533/cosmeticsshop';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.Promise = global.Promise;

mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/users', user);
app.use('/orders', order);
app.use('/bags', bag);
app.use('/addresses', address);
app.use(express.static('views'));

let port = 1234;



app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});