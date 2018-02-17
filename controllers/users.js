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
	// var submitOK = false;
	db.User.create({
		user_firstname: req.body.firstName,
		user_lastname: req.body.lastName,
		user_email: req.body.email,
		user_password: req.body.password
	}).done(
		res.redirect("/")
	);

});

routerUser.post('/login', function (req, res) {

});

module.exports = routerUser;