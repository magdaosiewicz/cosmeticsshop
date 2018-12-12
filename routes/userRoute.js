const express = require('express');
const router = express.Router();
// Require the controllers WHICH WE DID NOT CREATE YET!!
const userController = require('../controllers/userController');

router.get('/test', userController.test);
router.get('/getUsers', userController.getUsers);
router.get('/getUser/:id',userController.getUserId );
router.post('/create', userController.userCreate);
router.put('/update/:id', userController.userUpdate);
router.post('/login', userController.loginUser);


module.exports = router;