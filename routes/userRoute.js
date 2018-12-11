const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
// Require the controllers WHICH WE DID NOT CREATE YET!!
const userController = require('../controllers/userController');

const checkAuth = require('../middleware/check-auth');
router.get('/test', userController.test);
router.get('/getUsers', userController.getUsers);
router.get('/getUser/:id',userController.getUserId );
router.post('/create', userController.userCreate);
router.put('/update/:id', userController.userUpdate);
router.post('/login', userController.loginUser);


module.exports = router;