const assert = require('assert');
const User = require('../models/userModel');
const Address = require('../models/orderModel');


describe('Create user', function () {

    let user;
    it('Create a user to the database', function() {
        let address = new Address({
            country: 'Poland',
            city: 'Sulkowice',
            streetAddress: 'Krzywusia',
            houseNumber: 44,
            province: 'Malopolska',
            postCode: 32440
        });

        user = new User({
            name : 'Jasiu',
            surname : 'Kowalski',
            username : 'jasio',
            password: 'superjasio',
            address: address
        });

        user.save().then(function () {
            assert(!user.isNew)
            done();
        });
    });

    it('Get address by user id.', function() {

        User.findOne({_id:user._id}).then(function(result){
            assert(result.address===user._id.address);
            done();
        });
    });

});


