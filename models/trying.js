// define sequelise model for 'activeTry' database table 

module.exports = function (sequelize, DataTypes) {
    var Try = sequelize.define("Try", {
        activeTry_customer: {type: DataTypes.INTEGER, allowNull: false},
        activeTry_item: {type: DataTypes.INTEGER, allowNull: false},
        active_startdate: {type: DataTypes.DATE, allowNull: false},
        active_mailed: {type: DataTypes.DATE}

    });

    return Try;
};