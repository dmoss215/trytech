// define sequelise model for 'trying' database table 

module.exports = function (sequelize, DataTypes) {
    var Try = sequelize.define("Try", {
        trying_customer: {type: DataType.INTEGER, allowNull: false},
        trying_item: {type: DataType.INTEGER, allowNull: false},
        try_date: {type: DataType.DATE, allowNull: false},
        date_sent: {type: DataType.DATE}

    });

    return Try;
};