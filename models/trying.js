// define sequelise model for 'activeTry' database table 

module.exports = function (sequelize, DataTypes) {
    var Try = sequelize.define("Try", {
        activeTry_customer: {type: DataType.INTEGER, allowNull: false},
        activeTry_item: {type: DataType.INTEGER, allowNull: false},
        active_startdate: {type: DataType.DATE, allowNull: false},
        active_mailed: {type: DataType.DATE}

    });

    return Try;
};