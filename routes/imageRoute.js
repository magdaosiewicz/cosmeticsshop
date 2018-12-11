const crypto = new require('crypto');
const path = require('path');
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

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


router.get('/test', imageController.test);
router.post('/upload', upload.single('file'), imageController.uploadImage);
router.get('/files', imageController.getAllImages);
router.get('/files/:filename', imageController.getFileByFilename);
router.get('/image/:filename', imageController.getImageByFilename);
//router.get('/load/', imageController.loadsForm)



module.exports = router;