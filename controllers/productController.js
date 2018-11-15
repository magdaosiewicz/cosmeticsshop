const Product = require('../models/productModel');

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

    let product = new Product({
        nameOfProduct: req.body.nameOfProduct,
        numberOfPieces: req.body.numberOfPieces,
        aboutProduct: req.body.aboutProduct,
        ingredients: req.body.ingredients,
        recommendation: req.body.recommendation,
        price: req.body.price
        });
    product.save();
    //(function () {
        // if (err) {
        //     return next(err);
        // }
        res.send('Product created successfully. \n' + product)
    //});
};

/////////////////////////////////////////////

exports.product_details = function (req, res) {
    Product.findById(req.params.id).then(function () {
        Product.findOne({_id: req.params.id}).then(function (product) {
            //  if (err) return next(err);
            res.send('Detail of product: \n\n' + product)
        });
    });
};
////////////////////////////////////////////

exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body).then(function () {
        Product.findOne({_id: req.params.id}).then(function (product) {
          //  if (err) return next(err);
            res.send('Product updated. \n' + product)
        });
    });
};
/////////////////////////////////////////////////
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
