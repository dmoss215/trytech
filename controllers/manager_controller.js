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
            res.render("index");

            break;

        case 2:

        console.log("2")

            break;

        default:

    }

    // db.Product.findAll({
    //     order: [
    //         ['product_name', 'ASC']
    //     ],
    //     where: {
    //         category_id: req.params.id
    //     }
    // }).then(function (productList) {

    //     var hbsObj = {
    //         products: productList
    //     };

    // res.render("categories", hbsObj);
    // });
});



// export routes for use in server.js

module.exports = routerManager;