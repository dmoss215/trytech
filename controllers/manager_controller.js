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
        
        // ------- get category list to populate category dropdown list on the add product page -------

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
        
        // ------- update product inventory ---------

            db.Product.findAll({
                order: [
                    ['category_id', 'ASC']
                ]
            }).then(function (productList) {

                db.Category.findAll({
                    order: [
                        ['id', 'ASC']
                    ]
                }).then(function (categoryList) {

                    var hbsObj = {
                        products: productList,
                        categories: categoryList
                    };

                    res.render("inventory_page", hbsObj);

                });
            });
            break;

        case "3":

     // view hired items (requires join between User & Product and Try databases)

            db.Try.findAll({

                include:
                [
                    {
                    model: db.User,
                }, {
                    model: db.Product
                }],

                order: [
                    ['ProductId', 'ASC']
                ]

            }).then(function (recordsFound) {

                var hbsObj = {
                    tryrecords: recordsFound,
                };

                console.log(hbsObj);

                res.render("view_hired_items", hbsObj);
            });

            break;

        case "4":

        // ------  load log_return_item page ---------

            res.render("log_return_items");

            break;

        case "5":

        // -------- get product categories for add category page] ------------

            db.Category.findAll({
                order: [
                    ['category_name', 'ASC']
                ]
            }).then(function (categoryList) {
                var hbsObj = {
                    categories: categoryList
                };

                res.render("add_category", hbsObj);
            });

            break;


        case "6":

            res.render("search_user");

            break;

        default:
            res.render("manager");
    }

});       // -- ------- end of switch ststement ------------


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

        // ----- query db using user's name -------------

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

        db.User.findOne({
            where: {
                id: updateUser.id
            }
        }).then(function (customerFound) {

            var hbsObj = {
                customer: customerFound
            };

            console.log(hbsObj);

            res.render("search_user", hbsObj);
        })

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

// -------------- Get complete history of user hires -----------------

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

// ---------------- Update stock levels -----------------------

routerManager.post("/manager/stockupdate", function (req, res) {

    var id = req.body.id;
    var units = req.body.units;

    console.log(id + " " + units);

    db.Product.update({
        units_available: units
    }, {
        where: {
            id: id
        }
    }).then(function (product) {

        db.Product.findAll({
            order: [
                ['category_id', 'ASC']
            ]
        }).then(function (productList) {

            db.Category.findAll({
                order: [
                    ['id', 'ASC']
                ]
            }).then(function (categoryList) {

                var hbsObj = {
                    products: productList,
                    categories: categoryList
                };

                res.render("inventory_page", hbsObj);

            });
        });

    });

});

// ---------------- Try record lookup using product id ------------------


routerManager.post("/manager/trylookup", function (req, res) {

    var id = req.body.id;

    db.Try.findOne({
        where: {
            ProductId: id
        },
        include: 
        [
            {
            model: db.User,
        }, {
            model: db.Product
        }]

    }).then(function (recordFound) {

        var hbsObj = {
            tryrecord: recordFound
        };

        res.render("log_return_items", hbsObj);
    });

});


// ---------------- log returned product -----------------------


routerManager.post("/manager/logreturn", function (req, res) {

    var id = req.body.id;

    db.Try.findOne({
        where: {
            id: id
        }
    }).then(function (tryRecord) {

        db.Completed.create({
            ProductId: tryRecord.ProductId,
            UserId: tryRecord.UserId,
            comleted_subscription: 1,
            completed_dateout: tryRecord.active_startdate,
            completed_dateback: tryRecord.active_startdate
        }).done(

            db.Try.destroy({
                where: {
                    id: req.body.id
                }
            }).then(function (user) {

                res.redirect("/manager");

            })

        );

    });

});

// ---------------- Add category -----------------------

routerManager.post("/manager/addcategory", function (req, res) {

    db.Category.create({
        category_name: req.body.name
    }).then(function (createdId) {

        db.Category.findAll({
            order: [
                ['category_name', 'ASC']
            ]
        }).then(function (categoryList) {
            var hbsObj = {
                categories: categoryList
            };

            res.render("add_category", hbsObj);

        });
    });
});




// export routes for use in server.js

module.exports = routerManager;