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

routerUser.post('/register', function(req, res) {

});

routerUser.post('/login', function (req, res) {

});

module.exports = routerUser;