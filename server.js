// dependencies

var express = require("express");
var bodyParser = require("body-parser");
var methovr = require("method-override");
var path = require('path');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Set up express

var PORT = process.env.PORT || 3000;
var app = express();

// require sequelize models for syncing
var db = require("./models");

// serve static content
app.use(express.static(path.join(__dirname, "public")));

// parse api URLs and json with bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// set up Express Validator
const { validationResult } = require('express-validator/check');

const result = validationResult.withDefaults({
    formatter: (error) => {
        return {
            myLocation: error.location,
        };
    }
});

// Connect Flash Middleware
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
  });

// set up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
app.use( require("./controllers/customer_controller.js"));
app.use( require("./controllers/manager_controller.js"));
app.use( require("./controllers/users.js"));

// sync sequelize model then start express

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("Listening at localhost: " + PORT);
    });
});

