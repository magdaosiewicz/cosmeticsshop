const Category = require('../models/categoryModel');


exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.addCategory = function (req, res) {
    
    let category = new Category({
        nameOfCategory: req.body.nameOfCategory,
    });

    category.save(function () {
        res.send('Category created successfully. \n\n' + category)
    });
};

exports.getCategoryById = function (req, res) {
    Category.findById(req.params.id).then(function (category) {
        Category.findOne({id: req.params.id}).then(function () {
            //  if (err) return next(err);
            res.json(category)
        });
    });
};

exports.getCategories = function (req, res) {
    Category.find({}).then(function (categories) {
        res.send(categories);
    })
};