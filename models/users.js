// define sequelise model for 'users' database table 

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_firstname: {type: DataTypes.STRING, allowNull: false},
        user_lastname: {type: DataTypes.STRING, allowNull: false},
        user_email: {type: DataTypes.STRING, allowNull: false},
        address_street: {type: DataTypes.STRING, allowNull: false},
        address_city: {type: DataTypes.STRING, allowNull: false},
        address_state: {type: DataTypes.STRING, allowNull: false},
        address_zip: {type: DataTypes.STRING, allowNull: false},
        user_password: {type: DataTypes.STRING, allowNull: false},
        payment_method: {type: DataTypes.ENUM('credit card', 'paypal', 'bitcoin', 'voucher'), allowNull: false, defaultValue: "credit card"},
        agreement_signed: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
        user_subscription: {type: DataTypes.INTEGER, allowNull: false},
        date_registered: {type: DataTypes.DATE},
    });

    return User;
};