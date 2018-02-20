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


// Routes for manager actions from initial manager menu

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



// route for adding a new product 

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


// route for searching for a particular user/customer

routerManager.post("/manager/searchuser", function (req, res) {

    if (req.body.id) {

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


// route for updating a users record

routerManager.post("/manager/updateuser", function (req, res) {

    var updateUser = req.body;
    console.log(updateUser);

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


// route for deleting a users record

routerManager.delete("/manager/deleteuser", function (req, res) {

    db.User.destroy({
        where: {
            id: req.body.id
        }
    }).then(function (user) {

        res.json(user);
    });

});







// export routes for use in server.js

module.exports = routerManager;