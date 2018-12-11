const Product = require('../models/productModel');
const Category = require('../models/categoryModel');
const categoryController = require('../controllers/categoryController');
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
let gfs;
const db = mongoose.connection;

db.once('open', () => {
    // Init stream
    gfs = Grid(db.db, mongoose.mongo);
    gfs.collection('uploads');
});



//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
////////////////////////////////////////////////
exports.products_read = function (req, res) {
    Product.find({}).then(function (products) {
        res.send(products);
    });
};


///////////////////////////////////////////node ap
exports.product_create = function (req, res) {

    Category.findOne({nameOfCategory: req.params.nameOfCategory}).then(function (category) {

       // gfs.files.findOne({filename: req.params.filename}).then(function (productImage) {

            let product = new Product({
                nameOfProduct: req.body.nameOfProduct,
                numberOfPieces: req.body.numberOfPieces,
                aboutProduct: req.body.aboutProduct,
                ingredients: req.body.ingredients,
                recommendation: req.body.recommendation,
                price: req.body.price,
                category: category
               // productImage: req.body.productImage
            });

            product.save();
            res.send('Product created successfully. \n' + product)

        });
   // });
};

/////////////////////////////////////////////////////////

exports.product_details = function (req, res) {
    Product.findById(req.params.id).then(function () {
        Product.findOne({_id: req.params.id}).then(function (product) {
            //  if (err) return next(err);
            res.json(product)
        });
    });
};
/////////////////////////////////////////////////////////

exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body).then(function () {
        Product.findOne({_id: req.params.id}).then(function (product) {
            //  if (err) return next(err);
            res.send('Product updated. \n' + product)
        });
    });
};
//////////////////////////////////////////////////////////
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err, result) {
        if (err) return next(err);
        res.json(result);
    })
};
////////////////////////////////////////////////////
exports.getProductsByCategory = function (req, res) {
    Category.findOne({nameOfCategory: req.params.nameOfCategory}).then(function (category) {
        Product.find({category: category}).then(function (products) {
            res.json(products)
        })

    });


};