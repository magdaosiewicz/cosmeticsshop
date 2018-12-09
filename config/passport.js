// var passport = require('passport');
// var User = require('../models/userModel');
// var LocalStrategy = require('passport-local').Strategy;
//
// passport.serializeUser(function (user,done) {
//     done(null,user.id);
// });
// passport.deserializeUser(function (id,done) {
//     User.findById(id,function (err,user) {
//         done(err,user);
//     });
// });
//
// passport.use('local.signup', new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true
//
// }, function (req,email,password,done) {
//     User.findOne({'email':email}, function (err,user) {
//         if(err){
//             return done(err);
//         }
//         if(user){
//             return done(null, false,{message: "Emaul juz uzty lolu"});
//         }
//         var newUser =new User();
//         newUser.email=req.body.email;
//         newUser.password=req.body.password;
//         // newUser.name=name;
//         // newUser.surname=surname;
//         // newUser.username=username;
//         // let address=new Address({
//         //     country: req.body.country,
//         //     city: req.body.city,
//         //     streetAddress: req.body.streetAddress,
//         //     houseNumber: req.body.houseNumber,
//         //     province: req.body.province,
//         //     postCode: req.body.postCode
//         // });
//         // address.save();
//         newUser.save(function (err,registeredUser) {
//             if(err){
//                 return done(err);
//             }
//             let payload = {subject: registeredUser._id};
//             let token = jwt.sign(payload, 'secretKey');
//             res.status(200).send({token})
//             return done(null, newUser);
//         });
//
//     });
// }));
//
//
