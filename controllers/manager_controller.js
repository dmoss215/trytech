var express = require("express");
var routerManager = express.Router();

// require the customer models (   ) to use for database interaction

var db = require("../models");


// ====================================
// create routes with logic as required
// ====================================

// Route to display manager portal

routerManager.get("/manager", function (req, res) {

    res.render("manager");
});


// ---------- Manager actions & routes -----------------------

routerManager.get("/manager/:action", function (req, res) {

    var action = req.params.action;

    switch (action) {

        case "1":

            db.Category.findAll({
                order: [
                    ['category_name', 'ASC']
                ]
            }).then(function (categoryList) {
                var hbsObj = {
                    categories: categoryList
                };

                res.render("add_product", hbsObj);

            });
            break;

        case "2":

            console.log("2");

            break;

        case "7":

            res.render("search_user");

            break;

        default:

    }

});



// ---------------- Add a new product  ----------------------

routerManager.post("/manager/addproduct", function (req, res) {

    var newProduct = req.body;
    console.log(newProduct);

    db.Product.create({
        product_name: newProduct.productName,
        manufacturer: newProduct.manufacturer,
        product_description: newProduct.description,
        retail_price: newProduct.retailPrice,
        image_url: newProduct.imageUrl,
        category_id: newProduct.category,
        rating: newProduct.rating,
        units_available: newProduct.units
    }).done(
        res.redirect("/manager")
    );

});


// ------------- Search for a particular user/customer --------

routerManager.post("/manager/searchuser", function (req, res) {



    if (req.body.id) {

        // ----- query db using user id -------------

        db.User.findOne({
            where: {
                id: req.body.id
            }
        }).then(function (customerfound) {

            db.Subscription.findAll({

            }).then(function (subscriptionList) {

                var hbsObj = {
                    customer: customerfound,
                    subscription: subscriptionList
                };

                res.render("search_user", hbsObj);

            });

        });

    } else {

        // ----- query db useing user name -------------

        db.User.findOne({
            where: {
                user_firstname: req.body.firstname,
                user_lastname: req.body.lastname
            }

        }).then(function (customerfound) {

            db.Subscription.findAll({

            }).then(function (subscriptionList) {

                var hbsObj = {
                    customer: customerfound,
                    subscription: subscriptionList
                };

                res.render("search_user", hbsObj);
            });

        });

    }

});


// -------------- Update a users record -----------------

routerManager.post("/manager/updateuser", function (req, res) {

    var updateUser = req.body;

    db.User.update({
        user_firstname: updateUser.firstName,
        user_lastname: updateUser.lastName,
        user_email: updateUser.email,
        address_street: updateUser.streetname,
        address_city: updateUser.city,
        address_state: updateUser.state,
        address_zip: updateUser.zip,
        payment_method: updateUser.paymentMethod,
        agreement_signed: updateUser.agreementSigned,
        user_subscription: updateUser.subscriptionType

    }, {
        where: {
            id: updateUser.id
        }
    }).done(

        res.redirect("/manager")
    );

});


// ---------------- Delete a user record -----------------------

routerManager.post("/manager/deleteuser", function (req, res) {

    db.User.destroy({
        where: {
            id: req.body.id
        }
    }).then(function (user) {

        res.redirect("/manager");
    });

});

// ---------------- Get Items hired by user -----------------------

routerManager.post("/manager/useritems", function (req, res) {

    var id = req.body.id;

    db.Try.findAll({
        where: {
            UserId: id
        },
        include: {
            model: db.Product
        }

    }).then(function (productsFound) {

        db.User.findOne({
            where: {
                id: id
            }
        }).then(function (customerFound) {

            var hbsObj = {
                products: productsFound,
                customers: customerFound
            };

            console.log(hbsObj);

            res.render("display_user_items", hbsObj);
        });

    });

});

routerManager.post("/manager/userhistory", function (req, res) {

    var id = req.body.id;

    db.Completed.findAll({
        where: {
            UserId: id
        },
        include: {
            model: db.Product
        }

    }).then(function (productsFound) {

        db.User.findOne({
            where: {
                id: id
            }
        }).then(function (customerFound) {

            var hbsObj = {
                products: productsFound,
                customers: customerFound
            };

            console.log(hbsObj);

            res.render("display_user_history", hbsObj);
        });

    });

});



// export routes for use in server.js

module.exports = routerManager;