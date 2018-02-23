var express = require("express");
var routerCustomer = express.Router();

// require the customer models (   ) to use for database interaction

var db = require("../models");

// ====================================
// create routes with logic as required
// ===================================


// route for /

routerCustomer.get("/", function (req, res) {

    db.Category.findAll({
        order: [
            ['category_name', 'ASC']
        ]
    }).then(function (categoryList) {
        var hbsObj = {
            categories: categoryList,
            user: req.user
        };
        console.log(hbsObj);

        res.render("index", hbsObj);
    });
});

routerCustomer.get("/categories/:id", function (req, res) {

    db.Product.findAll({
        order: [
            ['product_name', 'ASC']
        ],
        where: {
            category_id: req.params.id
        }
    }).then(function (productList) {

        var hbsObj = {
            products: productList
        };

        res.render("categories", hbsObj);
    });
});

routerCustomer.get("/add-to-cart/:id", function (req, res) {

    var user = req.user;

    if (user != null) {

        db.Product.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (product) {

            var hbsObj = {
                product: product,
                user: user
            };

            console.log(hbsObj);

            res.render("order", hbsObj);
        });

    } else {

        res.render("index");
    }

});

routerCustomer.post("/address-updated", function (req, res) {

    var updateUser = req.body;
    var productId = req.body.productId;

    console.log(updateUser);
    console.log(productId);

    db.User.update({
        address_street: updateUser.addressStreet,
        address_city: updateUser.addressCity,
        address_state: updateUser.addressState,
        address_zip: updateUser.addressZip,
    }, {
        where: {
            id: req.user.id
        }
    }).then(

        db.Product.findOne({
            where: {
                id: productId
            }
        }).then(function (productFound) {

                db.User.findOne({
                    where: {
                        id: req.user.id
                    }
                }).then(function (userFound) {

                    var hbsObj = {
                        product: productFound,
                        orderUser: userFound
                    };

                    res.render("confirm_order", hbsObj);
                });

        })

    );

});

routerCustomer.post("/update-address", function (req, res) {

    // route to new page just devoted to updating customer address

    // new page gathers same info as order-page and submits to /address-updated



});




routerCustomer.post("/order-success", function (req, res) {

    var order = req.body;

    db.Try.create({
        ProductId: order.productId,
        UserId: req.user.id,
        active_startdate: '2017-12-02 00:00:00',
        active_mailed: '2017-12-02 00:00:00'
    }).then(function(record) {

        hbsObj = {
            orderNum: record.id
        };

    res.render("order_success", hbsObj);

    });
});



routerCustomer.get("/about-trytech", function (req, res) {

    res.render("about");
});



// export routes for use in server.js

module.exports = routerCustomer;