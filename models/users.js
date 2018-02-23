// define sequelise model for 'users' database table 

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_firstname: {type: DataTypes.STRING, allowNull: false},
        user_lastname: {type: DataTypes.STRING, allowNull: false},
        user_email: {type: DataTypes.STRING, allowNull: false},
        user_password: {type: DataTypes.STRING, allowNull: false},
        address_street: {type: DataTypes.STRING, allowNull: true},
        address_city: {type: DataTypes.STRING, allowNull: true},
        address_state: {type: DataTypes.STRING, allowNull: true},
        address_zip: {type: DataTypes.STRING, allowNull: true},
        payment_method: {type: DataTypes.ENUM('credit card', 'paypal', 'bitcoin', 'voucher'), allowNull: true, defaultValue: "credit card"},
        agreement_signed: {type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false},
        user_subscription: {type: DataTypes.INTEGER, allowNull: true},
        date_registered: {type: DataTypes.DATE},
    });

    User.associate = function(models) {
         User.hasMany(models.Try);
         User.hasMany(models.Completed);
     };




    return User;
};

