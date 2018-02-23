var express = require('express');
var routerUser = express.Router();
var passport = require('passport');
var db = require("../models");

// Register
routerUser.get('/register', function (req, res) {
	res.render('register');
});

// After login
routerUser.get('/afterLogin', function (req, res) {
	res.render('index2');
});


// Register New User
routerUser.post('/register/user', function (req, res) {
	var regUser = req.body;
	console.log(regUser);

	var firstName = regUser.firstName;
	var lastName = regUser.lastName;
	var email = regUser.email;
	var password = regUser.password;
	var password2 = regUser.password2;

	console.log(lastName, email);

	// Validation
	req.checkBody('firstName', 'Name is required').notEmpty();
	req.checkBody('lastName', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if (errors) {
		res.render('register', {
			errors: errors
		});
	} else {
		var newUser = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password
		};

		db.User.create({
			user_firstname: newUser.firstName,
			user_lastname: newUser.lastName,
			user_email: newUser.email,
			user_password: newUser.password
		}).done(
			res.render("success", newUser)
		);

		req.flash('success_msg', 'You are registered and can now login');

		// res.redirect('/users/login');
	}

});

routerUser.post('/welcome/user', function (req, res) {
	var newUser = req.body;
	console.log("New User: ", newUser);

	// db.User.findOne({
	// 	where: {
	// 		user_firstname: newUser.firstName,
	// 		user_lastname: newUser.lastName,
	// 		user_email: newUser.email,
	// 		user_password: newUser.password
	// 	}
	// }).then(function(customerFound) {
	// 	hbsObj = {
	// 		customer: customerFound
	// 	}
	// 	console.log(hbsObj);
	db.User.update({
		address_street: newUser.addressStreet,
		address_city: newUser.addressCity,
		address_state: newUser.addressState,
		address_zip: newUser.addressZip
	}, {
		where: {
			user_firstname: newUser.firstName,
			user_lastname: newUser.lastName,
			user_email: newUser.email,
			user_password: newUser.password
		}
	}).done(
		res.redirect("/")
	);

});


// User Login
routerUser.post('/login',
	passport.authenticate('local', { failureRedirect: '/register'}),
	function (req, res) {
		res.redirect("/")
	});

module.exports = routerUser;