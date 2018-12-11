const User = require('../models/userModel');
const Bag = require('../models/bagModel');
const Address = require('../models/addressModel');
const mongoose = require("mongoose");

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.userCreate = function (req, res) {

    let bag = new Bag({
        cost: 0,
        products: [{nameOfProduct: req.body.nameOfProduct,
            numberOfPieces: req.body.numberOfPieces,
            aboutProduct: req.body.aboutProduct,
            ingredients: req.body.ingredients,
            recommendation: req.body.recommendation,
            price: req.body.price
        }]
    });
    bag.save();

    let address=new Address({
        country: req.body.country,
        city: req.body.city,
        streetAddress: req.body.streetAddress,
        houseNumber: req.body.houseNumber,
        province: req.body.province,
        postCode: req.body.postCode
    });
    address.save();

    let user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        surname: req.body.surname,
        username: req.body.username,
        password: req.body.password,
        bag: bag,
        address: address,
        orders: [{                                                                  //tez ma zaincializowan eod razu id a chcialam zeb ytylko kosz mial
            }]
    });
        user.save();
       return console.log(user);
       res.json(user);

};

/////////////////////////////////////////////////////////////////////////////
exports.userUpdate = function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body).then(function () {
        User.findOne({_id: req.params.id}).then(function (user) {
            res.json(user)
        })
    });
};

exports.getUsers = function (req, res) {
    User.find({}).then(function (users) {
        res.json(users);
    })
};

// <<<<<<< HEAD
// =======
exports.loginUser=function (req,res) {
    let userData = req.body;
    User.findOne({email: userData.email}, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (!user) {
        res.status(401).json('Invalid Email');
    }else
        if ( user.password !== userData.password) {
        res.status(401).json('Invalid Password');
    }
    else {User.findOne((registeredUser)=> {
            res.json(user)
        });
    }}
});
}

exports.getUserId= function  (req, res){
    User.findById(req.params.id,req.body).then(function (user) {
    // User.findOne({id: req.params._id}).then(function (user) {
        res.json(user)
    });
    // })
};
// >>>>>>> 4bfedbd8ae8f2ebb990639148b4aa7271f601425


