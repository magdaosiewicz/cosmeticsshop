const User = require('../models/userModel');
const Address = require('../models/addressModel');


exports.test = function (req, res) {
    res.send('Address.Greetings from the Test controller!');
};

exports.addAddress = function (req, res) {
    let address = new Address({
        country: req.body.country,
        city: req.body.city,
        streetAddress: req.body.streetAddress,
        houseNumber: req.body.houseNumber,
        province: req.body.province,
        postCode: req.body.postCode
    });
    address.save(function () {
        res.send('Address add successfully. \n\n' + address)
    });
}

exports.getAddressOfUser = function (req, res) {
    User.findById(req.params.id, req.body).then(function (user) {
        Address.findById(user.address).then(function (address) {
            res.send("The address is: " + address)
        })
    })
};