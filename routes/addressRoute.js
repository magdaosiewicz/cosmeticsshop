const express = require('express');
const router = express.Router();

const addressController = require('../controllers/addressController');

router.get('/test', addressController.test);
router.post('/addAddress', addressController.addAddress);
router.get('/:id/getAddressOfUser', addressController.getAddressOfUser);

module.exports = router;