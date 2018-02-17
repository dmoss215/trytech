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

routerUser.post('/users/register', function(req, res) {
		var newUser = req.body;
		console.log(newUser);
		// var submitOK = false;
		db.User.create({
				user_firstname: req.body.name,
				user_lastname: req.body.username,
				user_email: req.body.email
		});

});

routerUser.post('/login', function (req, res) {

});

module.exports = routerUser;