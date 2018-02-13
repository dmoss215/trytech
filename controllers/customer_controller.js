var express = require("express");
var routerCustomer = express.Router();

// require the customer models (   ) to use for database interaction

var db = require("../models");

// ====================================
// create routes with logic as required
// ===================================


// route for /

routerCustomer.get("/", function (req, res) {

    db.Product.findAll({
        order: [
            ['product_name', 'ASC']
        ]
    }).then(function (productList) {

                var hbsObj = {
                    products: productList,
                };

                console.log(hbsObj);
                res.render("index", hbsObj);

            });

});









// export routes for use in server.js

module.exports = routerCustomer;