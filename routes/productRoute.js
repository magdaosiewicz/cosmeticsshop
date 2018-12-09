const express = require('express');
const router = express.Router();
const crypto = new require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const path = require('path');

// Require the controllers WHICH WE DID NOT CREATE YET!!
const productController = require('../controllers/productController');
///////////////////////////////////////////////////////////////////////////////////////////////

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname);
//     }
// });
//
//
//
// const fileFilter = (req, file, cb) => {
//     // reject a file
//     if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };


let dev_db_url = 'mongodb://ela:ela123@ds151533.mlab.com:51533/cosmeticsshop';
const storage = new GridFsStorage({
    url: dev_db_url,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({ storage });



////////////////////////////////////////////////////////////////////////////////////////
// a simple test url to check that all of our files are communicating correctly.
router.get('/test', productController.test);
router.post('/:nameOfCategory/create', upload.single('productImage'), productController.product_create);
router.get('/:id/product', productController.product_details);
router.put('/:id/update', productController.product_update);
router.delete('/:id/delete', productController.product_delete);
router.get('/products', productController.products_read);
router.get('/:nameOfCategory/getProductsByCategory', productController.getProductsByCategory)


module.exports = router;