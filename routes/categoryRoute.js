const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');


router.get('/test', categoryController.test);
router.post('/add', categoryController.addCategory);
router.get('/:id/getCategoryById', categoryController.getCategoryById);
router.get('/getCategories', categoryController.getCategories)


module.exports = router;