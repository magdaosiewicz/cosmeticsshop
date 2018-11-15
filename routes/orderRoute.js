const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const orderController = require('../controllers/orderController');

////////////////////////////////////////////////////////////////////////////////////////
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', orderController.test);
router.get('/:user/getByUserId', orderController.getOrdersByUserId)
router.post('/:id/addOrder', orderController.addOrder);


module.exports = router;