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

// routes for manager actions from initial menu

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

        case "5":

            res.render("search_user");

            break;

        default:

    }

});

// ==============================================================
// -------------- end of switch ststement -----------------------
// ==============================================================

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

    db.User.findOne({
        where: {
            id: req.body.id
        }
    }).then(function (customerfound) {

        var hbsObj = {
            customer: customerfound
        };
console.log(hbsObj)
        res.render("search_user", hbsObj);

    });

});



// } else {

//     db.User.findOne({
//         where: Sequelize.and(
//             {firstname: req.body.firstname},
//             {lastname: req.body.lastname}
//         )
//     }).then(function (customerfound) {

//         var hbsObj = {
//             customer: customerfound
//         };           

//     res.render("search_user", hbsObj);
//     });
// }





// export routes for use in server.js

module.exports = routerManager;