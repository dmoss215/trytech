// define sequelise model for 'subscriptions' database table 

module.exports = function (sequelize, DataTypes) {
    var Subscription = sequelize.define("Subscription", {
        tier_name: {type: DataTypes.STRING, nullAllow: false, defaultValue: 'none'},
        monthly_cost: {type: DataTypes.DECIMAL(10,2), nullAllow: false},
        num_devices: {type: DataTypes.INTEGER, nullAllow: False},
        num_days: {type: DataTypes.INTEGER, nullAllow: false, defaultValue: 5},

    });

    return Subscription;
};