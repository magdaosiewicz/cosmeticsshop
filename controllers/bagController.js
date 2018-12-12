const User = require('../models/userModel');
const Order = require('../models/orderModel');
const Bag = require('../models/bagModel');
const Product = require('../models/productModel');
const productController = require('../controllers/productController');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.addProduct = function (req, res) {
    User.findById(req.params.id).then(function (user) {
        Bag.findByIdAndUpdate(user.bag).then(function (bag) {
            Product.findOne({_id: req.params.id_product}).then(function (product) {
                bag.products.push(product);
                bag.cost += product.price;
                bag.save().then(function () {
                    Bag.findOne(user.bag).then(function (bag) {
                        res.json("The product was added to your bag" + bag)
                    });

                });
            });
        });
    });
};

exports.deleteProduct = function (req, res) {
    User.findById(req.params.id).then(function (user) {
        Bag.findByIdAndUpdate(user.bag).then(function (bag) {
            Product.findOne({_id: req.params.id_product}).then(function (product) {
                for (let j = 0; j < bag.products.length; j++) {
                    if (bag.products[j]._id === product.id) {
                        bag.cost = bag.cost - product.price;
                        bag.products.remove(j, 1);
                        bag.save().then(function () {
                            Bag.findOne(user.bag).then(function (bag) {
                                res.json(bag);
                            });

                            //   }
                            // }
                            // }
                            //  Product.findOne({_id: req.params.id_product}).then(function (product) {


                        });
                    }  ///if
                }
                });
            //} //for

        });
    });
};

exports.getBagOfUser = function (req, res) {
    User.findById(req.params.id, req.body).then(function (user) {
        Bag.findById(user.bag).then(function (bag) {
            res.json(bag)
        })
    });
};