const User = require('../models/userModel');
const Bag = require('../models/bagModel');
const Address = require('../models/addressModel');
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.userCreate = function (req, res) {

    let bag = new Bag({
        cost: 0,
        products: [{
            nameOfProduct: req.body.nameOfProduct,
            numberOfPieces: req.body.numberOfPieces,
            aboutProduct: req.body.aboutProduct,
            ingredients: req.body.ingredients,
            recommendation: req.body.recommendation,
            price: req.body.price
        }]
    });
    bag.save();

    let address = new Address({
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

    let userData = req.body;
    User.findOne({email: userData.email}, (err, userf) => {
        if(!userf){
            user.save((registeredUser) => {
                let payload ={subject: registeredUser}
                let token=jwt.sign(payload,'secretKey');
                return res.status(200).send({token});
            })
        }else {
            return res.status(400).send('That email already exists!');
        }
    });
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

exports.loginUser = function (req, res) {
    let userData = req.body;
    User.findOne({email: userData.email}, (err, user) => {
        if (err) {console.log(err);
        } else {
               if (!user) {
                   res.status(401).json('Błędny Email');
               } else if (user.password !== userData.password) {
                   res.status(401).json('Błędne haslo');
               } else {
                   User.findOne((registeredUser)=> {
                       let payload = {subject: registeredUser};
                       let token = jwt.sign(payload, 'secretKey');
                       res.status(200).send({token})
                   })
               }
        }
    })
};

exports.getUserId = function (req, res) {
    User.findOne({id: req.params._id}).then(function (user) {
        res.send(user)
    });
};
// };exports.getUserId = function (req, res) {
//     User.findById(req.params.id, req.body).then(function (user) {
//         res.json(user)
//     });
// };