var express = require ('express');
var routerUser = express.Router();
var db = require("../models");

// Register
routerUser.get('/register', function (req, res) { 
    res.render('register');
 });

//  Login
routerUser.get('/login', function (req, res) {
    res.render('login');
});

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
			user_firstname: req.body.firstName,
			user_lastname: req.body.lastName,
			user_email: req.body.email,
			user_password: req.body.password
		}).done(
			res.redirect("/")
		);
	}
	
});

routerUser.post('/login', function (req, res) {

});

module.exports = routerUser;