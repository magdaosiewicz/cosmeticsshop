const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const productController = require('../controllers/productController');

////////////////////////////////////////////////////////////////////////////////////////
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', productController.test);
router.post('/create', productController.product_create);
router.get('/:id/product', productController.product_details);
router.put('/:id/update', productController.product_update);
router.delete('/:id/delete', productController.product_delete);
router.get('/products', productController.products_read);


module.exports = router;