const User = require('../models/userModel');
const Order = require('../models/orderModel');


//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
/////////////////////////////////////////////////////////////

exports.getOrdersByUserId = function (req, res) {
    Order.find({user: req.params.user}).then(function (orders) {
        User.findById({_id: req.params.user}).then(function (user) {
            res.send('There are all your orders here:\n\n ' + orders + "\n\n user: \n\n" + user)
        })

    });
};
///////////////////////////////////////////////////////////////////////////////////
exports.addOrder = function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body).then(function (user) {

        let order = new Order({
            dateOfOrder: req.body.dateOfOrder,
            dateOfRealisation: req.body.dateOfRealisation,
            meansOfPayment: req.body.meansOfPayment,
            bag: user.bag
        });

        order.save();
        user.orders.push(order);
        user.save(function () {
            User.findOne({_id: req.params.id}).then(function (userUpdated) {
                res.send("The order was added. \n\n\n" + userUpdated)

            })
        })
    });
};





//
// exports.orderCreate = function (req, res) {
//     let order = new Order({
//         totalCost: req.body.totalCost,
//         dateOfOrder: req.body.dateOfOrder,
//         dateOfRealisation: req.body.dateOfRealisation,
//         meansOfPayment: req.body.meansOfPayment
//     });
//
//     order.save(function () {
//         res.send('Order created successfully. \n\n' + order)
//     })
//
// };
//);

/////////////////////////////////////////////
