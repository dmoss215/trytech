
// set up initial boxes shown

$("#confirm-buttons").show();
$("#crud-buttons").hide();

$("#search-customer-box").show();
$("#update-customer-box").hide();

$("#customer-found-box").show();
$("#customer-updated-box").hide();


// --------- event handlers ----------------


// Switch user confirm/search again and CRUD buttons

$("#user-confirm").on("click", function (event) {

    $("#confirm-buttons").hide();
    $("#crud-buttons").show();

});

// show user update form (hide other boxes)

$("#update-user").on("click", function (event) {
    var id = $(this).data("id");

    $("#search-customer-box").hide();
    $("#customer-found-box").hide();
    $("#update-customer-box").show();

});

// event handler for search again buuton

$("#user-search-again").on("click", function (event) {

    window.location = "/manager";

});


// event handler for back buttons

$("#back").on("click", function (event) {
    window.location = "/manager";

});

$("#back-manager-menu").on("click", function (event) {
    window.location = "/manager";

});

