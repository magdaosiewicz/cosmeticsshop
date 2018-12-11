// app.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const crypto = new require('crypto');
const bodyParser = require('body-parser');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

//////////////////////////////////////////////////////////////////////////
const product = require('./routes/productRoute'); // Imports routes for the products
const category = require('./routes/categoryRoute');
const user = require('./routes/userRoute');
const order = require('./routes/orderRoute');
const bag = require('./routes/bagRoute');
const address = require('./routes/addressRoute');
const image = require('./routes/imageRoute');



const app = express();
app.use(cors());
/////////////////////////////////////////////////////////////////////////
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://ela:ela123@ds151533.mlab.com:51533/cosmeticsshop';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.Promise = global.Promise;
process.env.JWT_KEY = "secret"

mongoose.connect(mongoDB, { useNewUrlParser: true },);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', function () {
   console.log("Mongoose is now connected");

});

app.use(methodOverride('_method'));
app.set('view engine', 'ejs')
let gfs;

db.once('open', () => {
    // Init stream
    gfs = Grid(db.db, mongoose.mongo);
    gfs.collection('uploads');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/categories', category);
app.use('/users', user);
app.use('/orders', order);
app.use('/bags', bag);
app.use('/addresses', address);
// <<<<<<< HEAD
app.use('/images', image);


// =======
app.use(express.static(path.join(__dirname, 'quickstart')));
// >>>>>>> 4bfedbd8ae8f2ebb990639148b4aa7271f601425

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
);
if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
}
next();
});
// app.use((req, res, next) => {
//     res.set({
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "*",
//         "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
//     });
//
//     next();
// });

// <<<<<<< HEAD
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create storage engine
const storage = new GridFsStorage({
    url: dev_db_url,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({ storage });


//
//
// =======
// >>>>>>> 4bfedbd8ae8f2ebb990639148b4aa7271f601425
let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' );
});