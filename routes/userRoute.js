const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const userController = require('../controllers/userController');


router.get('/test', userController.test);
router.get('/getUsers', userController.getUsers);
router.post('/create', userController.userCreate);
router.put('/:id/update', userController.userUpdate);
//router.put('/:id/:id_product/updateBag', userController.addProductToTheBag);
//router.put('/:id/addOrder', userController.addOrder);



module.exports = router;