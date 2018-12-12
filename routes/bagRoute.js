const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const bagController = require('../controllers/bagController');

////////////////////////////////////////////////////////////////////////////////////////
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', bagController.test);
router.put('/:id/:id_product/addProduct', bagController.addProduct);
router.get('/:id/getBagOfUser', bagController.getBagOfUser);
router.put('/:id/:id_product/:index/deleteProduct', bagController.deleteProduct);

module.exports = router;