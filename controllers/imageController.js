const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
let gfs;
const db = mongoose.connection;

db.once('open', () => {
    // Init stream
    gfs = Grid(db.db, mongoose.mongo);
    gfs.collection('uploads');
});

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


exports.uploadImage = function (req, res) {
    res.json({ file: req.file });
};

// @route GET /files
// @desc  Display all files in JSON
exports.getAllImages =function(req, res){
    gfs.files.find().toArray((err, files) => {
        // Check if files
        if (!files || files.length === 0) {
            return res.status(404).json({
                err: 'No files exist'
            });
        }
        // Files exist
        return res.json(files);
    });

};

// @route GET /files/:filename
// @desc  Display single file object
exports.getFileByFilename =function(req, res){
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            });
        }
        // File exists
        return res.json(file);
    });
};

// @route GET /image/:filename
// @desc Display Image
exports.getImageByFilename =function(req, res){
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
       // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            });
        }

        // Check if image
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            // Read output to browser
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({
                err: 'Not an image'
            });
        }
    });

// @route GET /
// @desc Loads form
//
//     exports.loadsForm = function(req, res){
//         gfs.files.find().toArray((err, files) => {
//             // Check if files
//             if (!files || files.length === 0) {
//                 res.render('index', { files: false });
//             } else {
//                 files.map(file => {
//                     if(file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
//                         file.isImage = true;
//                     } else {
//                         file.isImage = false;
//                     }
//                 });
//                 res.render('index', { files: files });
//             }
//         });
//     };
//










};
