// app.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//////////////////////////////////////////////////////////////////////////
const product = require('./routes/productRoute'); // Imports routes for the products
const user = require('./routes/userRoute');
const order = require('./routes/orderRoute');
const bag = require('./routes/bagRoute');
const address = require('./routes/addressRoute');
const path = require('path');


const app = express();
app.use(cors());
/////////////////////////////////////////////////////////////////////////
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://ela:ela123@ds151533.mlab.com:51533/cosmeticsshop';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.Promise = global.Promise;

mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function () {
   console.log("Mongoose is now connected");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/users', user);
app.use('/orders', order);
app.use('/bags', bag);
app.use('/addresses', address);
app.use(express.static(path.join(__dirname, 'quickstart')));
// app.use((req, res, next) => {
//     res.set({
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "*",
//         "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
//     });
//
//     next();
// });



let port = 3000;



app.listen(port, () => {
    console.log('Server is up and running on port numner ' );
});