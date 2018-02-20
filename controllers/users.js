var express = require ('express');
var routerUser = express.Router();
var db = require("../models");

// Register
routerUser.get('/register', function (req, res) {
	// res.render('register');
	db.User.findAll({
        order: [
            ['payment_method', 'ASC']
        ]
    }).then(function (paymentList) {
        var hbsObj = {
            payments: paymentList
        };
        console.log(hbsObj.payments[0]);

        res.render("register", hbsObj);
    });
});

//  Login
// routerUser.get('/login', function (req, res) {
//     res.render('login');
// });

routerUser.post('/register/user', function(req, res) {
	var newUser = req.body;
	console.log(newUser);
	console.log(newUser.password.length);

	var hbsObj = {
		firstName: newUser.firstName,
		lastName: newUser.lastName,
		email: newUser.email,
		message: ""
	}

	if (newUser.password !== newUser.password2) {
		hbsObj.message = 'Please verify that your passwords match.';
		// $("#message-div").html("<p>Please verify that your passwords match.</p>");
		res.render('register', hbsObj);
	} else if (newUser.password.length < 6) {
		hbsObj.message = 'Your password must be at least 6 characters in length.';
		// $("#message-div").html("<p>Your password must be at least 6 characters in length.</p>");
		res.render('register', hbsObj)
	} else {
		db.User.create({
			user_firstname: newUser.firstName,
			user_lastname: newUser.lastName,
			user_email: newUser.email,
			user_password: newUser.password
		}).done(
			res.render("success", newUser)
		);
	}
	
});

routerUser.post('/welcome/user', function(req, res) {

	var newUser = req.body;
	console.log("New User: ", newUser);

	if (newUser.agree === "on") newUser.agree = 1;
	db.User.update({
		address_street: newUser.addressStreet,
		address_city: newUser.addressCity,
		address_state: newUser.addressState,
		address_zip: newUser.addressZip,
		agreement_signed: newUser.agree
	},
	{
		where: {
			user_firstname: newUser.firstName,
			user_lastname: newUser.lastName,
			user_email: newUser.email,
			user_password: newUser.password,
		}
	}).done(
		res.redirect("/")
	);

});

// routerUser.post('/login', function (req, res) {

// });

module.exports = routerUser;