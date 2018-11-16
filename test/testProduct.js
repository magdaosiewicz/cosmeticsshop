const assert = require('assert');
const Product = require('../models/productModel');

describe('Savings products.', function () {

    it('Save a product to the database', function() {  //done
        let product = new Product({
            nameOfProduct: 'tonik',
            ingredients: 'ewiem',
            aboutProduct: 'do demakijazu',
            price: 39
        });

        product.save().then(function () {
            assert(!product.isNew)
            //     done();
        });

    });
});

describe('Deleting products.', function () {

    it('Delet a product from the database', function() {

        Product.findOneAndRemove({nameOfProduct:'cream'}).then(function(){
            Product.findOne({nameOfProduct:'cream'}).then(function(){

                assert(result==null);
                done();
            });
        });

    });
});

