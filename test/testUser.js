const assert = require('assert');
const User = require('../models/userModel');
const Address = require('../models/addressModel');


describe('Create user', function () {

    it('Create a user to the database', function() {
        let address = new Address({
            country: 'Poland',
            city: 'Sulkowice',
            streetAddress: 'Krzywusia',
            houseNumber: 44,
            province: 'Malopolska',
            postCode: 32440
        });

        let user = new User({
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
});


describe('Updating User.', function () {

    it('Update a user from the database', function() {

        User.findOneAndUpdate({name : 'Jasiu'}, {name : 'Kasia'}).then(function () {
            User.findOne({_id:name.id}).then(function (result) {
                assert(result.name==='Kasia');
                done();
            })
        });
    });


    it('Increments a product from the database', function() {

        Address.update({}, {$inc:{houseNumber:1}}).then(function () {
            User.findOne({name:'Jasiu' }).then(function (record) {
                assert(record.houseNumber===45);
                done();
            })
        });
    });

});