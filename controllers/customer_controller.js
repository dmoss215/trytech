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
            categories: categoryList
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

    db.Product.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(product) {

        var hbsObj = {
            product: product
        };
        console.log(hbsObj);

        res.render("order", hbsObj);
    });
});

// export routes for use in server.js

module.exports = routerCustomer;