var express = require("express");
var routerManager = express.Router();

// require the customer models (   ) to use for database interaction

var db = require("../models");

// ====================================
// create routes with logic as required
// ===================================

// Route to display manager portal

routerManager.get("/manager", function (req, res) {

    res.render("manager");
});



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


        case 2:

        console.log("2");

            break;

        default:

    }

});

// -------------- end of switch ststement -----------------------

routerManager.post("/manager/addproduct", function (req, res) {

    var newProduct = req.body;
    console.log(newProduct);

    var hbsObj = {
        productName: newProduct.productName,
        manufacturer: newProduct.manufacturer,
        description: newProduct.description,
        retailPrice: newProduct.retailPrice,
        imageUrl: newProduct.imageUrl,
        category: newProduct.category,
        rating: newProduct.rating,
        units: newProduct.units
    };

    // validation code here if required

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



// export routes for use in server.js

module.exports = routerManager;