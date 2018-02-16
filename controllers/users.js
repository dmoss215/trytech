var express = require ('express');
var routerUser = express.Router();

// Register
routerUser.get('/register', function (req, res) { 
    res.render('register');
 });

//  Login
routerUser.get('/login', function (req, res) {
    res.render('login');
});

module.exports = routerUser;