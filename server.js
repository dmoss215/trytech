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
var db = require("./models");

// Set up express

var PORT = process.env.PORT || 3080;
var app = express();

// require sequelize models for syncing
var db = require("./models");

// serve static content
app.use(express.static(path.join(__dirname, "public")));

// parse api URLs and json with bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));


passport.use(new LocalStrategy(function(username, password, done) {
    db.User.findOne({
        where: {
            user_email: username
        }
    }).then(function(user) {
		console.log("this is the user: " + user);
        // we couldn't find a user with that username, so let passport know by providing the value false
        if (!user) {
            return done(null, false);
        }

        // check the password, in this example i'll just do a plaintext comparison. hopefully you are hashing and not doing plain text!
        if (user.user_password === password) {
            // all good, give passport the actual user.
            done(null, user);
        } else {
            // bad password!
            done(null, false, { message: 'Incorrect password.' });
        }


    })
    .catch(function(err) {
        // this lets passport know there was an error
        done(err);
    });
}));
  
  passport.serializeUser(function(user, done) {
	done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
	db.User.findById(id).then(function(user) {
        done(null, user);
    })
    .catch(done);
  });

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// set up Express Validator
// const { validationResult } = require('express-validator/check');

// const result = validationResult.withDefaults({
//     formatter: (error) => {
//         return {
//             myLocation: error.location,
//         };
//     }
// });


// Express Validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;
  
      while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param : formParam,
        msg   : msg,
        value : value
      };
    }
  }));

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

// db.sequelize.sync({ force: true }).then(function () {
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Listening at localhost: " + PORT);
    });
});