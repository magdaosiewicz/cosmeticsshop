const User = require('../models/userModel');
const Product = require('../models/productModel');
const Order = require('../models/orderModel');
const Bag = require('../models/bagModel');
const Address = require('../models/addressModel');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
//////////////////////////////////////////////////////////////////////////////

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
    bag.save()

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
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        password: req.body.password,
        bag: bag,
        address: address,
        orders: [{                                                                  //tez ma zaincializowan eod razu id a chcialam zeb ytylko kosz mial
            }]
    });


    user.save(function () {
        res.send('User created successfully. \n\n' + user)
    });
};
/////////////////////////////////////////////////////////////////////////////
exports.userUpdate = function (req, res) { // ale tylko dane osobowe, koszyk nie
    User.findByIdAndUpdate(req.params.id, req.body).then(function () {
        User.findOne({_id: req.params.id}).then(function (user) {
            res.render('User updated: \n\n' + user)
        })
    });
};

exports.getUsers = function (req, res) {
    User.find({}).then(function (users) {
        res.send(users);
    })
};





// module.exports = function(context, req) { context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl); f (req.query.name || (req.body && req.body.name))
//     { context.res = { // status: 200, /* Defaults to 200 */ body: {name: (req.query.name || req.body.name) } }; } else { context.res = { status: 400, body: "Please pass a name on the query string or in the request body" }; } context.res.headers = { 'Access-Control-Allow-Credentials' : 'true', 'Access-Control-Allow-Origin' : 'http://localhost', 'Access-Control-Allow-Origins' : 'http://localhost', 'Content-Type': 'application/json' }; context.done(); };

/////////////////////////////////////////////////////////////////////////////
// exports.addProductToTheBag = function (req, res) {
//     User.findById(req.params.id, req.body).then(function (rekord) {
//         Product.findById(req.params.id_product, req.body).then(function (result) {
//             rekord.products.push(result);
//             rekord.save(function () {
//                 res.send("The product was added to the bag. \n\n\n" + rekord)
//             })
//         });
//     });
//
// };
////////////////////////////////////////////////////////////////////////
// exports.addOrder = function (req, res) {    //trezba zrobic tak zeby z tego nie korzystac tylko z poziomu zamowien pobeirac po userID tylko te potrzebne
//     User.findByIdAndUpdate(req.params.id, req.body).then(function (result) {
//
//         let order = new Order({
//             user: result.id,
//             totalCost: req.body.totalCost,
//             dateOfOrder: req.body.dateOfOrder,
//             dateOfRealisation: req.body.dateOfRealisation,
//             meansOfPayment: req.body.meansOfPayment
//         });
//
//         order.save();
//         result.orders.push(order);
//         result.save(function () {  // nie ma takoiego konstruktora???
//             User.findOne({_id: req.params.id}).then(function (userUpdated) {
//                 res.send("The order was added. \n\n\n" + userUpdated)
//
//             })
//         })
//     });
// };



