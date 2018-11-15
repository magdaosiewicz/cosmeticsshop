const assert = require('assert');
const Product = require('../models/productModel');

describe('Savings products.', function () {

    it('Save a product to the database', function() {  //done
        let product = new Product({
            nameOfProduct: 'cream',
            price: 39
        });

        product.save().then(function () {
            assert(!product.isNew)
       //     done();
        });

    });







});