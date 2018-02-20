$("#confirm-buttons").show();
$("#crud-buttons").hide();

$("#search-customer-box").show();
$("#update-customer-box").hide();

$("#customer-found-box").show();
$("#customer-updated-box").hide();


$("#user-confirm").on("click", function (event) {

    $("#confirm-buttons").hide();
    $("#crud-buttons").show();

});


$("#update-user").on("click", function (event) {
    var id = $(this).data("id");

    $("#search-customer-box").hide();
    $("#customer-found-box").hide();
    $("#update-customer-box").show();

});


$("#delete-user").on("click", function (event) {
    event.preventDefault();

    var userId = {
        id: $(this).data("id")
    };

    $.ajax("/manager/deleteuser", {
        type: "DELETE",
        data: userId
    }).then(function () {
        alert("user deleted");
        window.location="/manager";
    });

});



$("#user-items").on("click", function (event) {
    var id = $(this).data("id");



});

$("#user-history").on("click", function (event) {
    var id = $(this).data("id");



});