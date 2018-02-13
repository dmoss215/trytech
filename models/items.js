// define sequelise model for 'items' database table 

module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Items", {
        serial_num: {type: DataTypes.STRING, allowNull: false, defaultValue: "0000000000"},
        product_type: {type: DataTypes.INTEGER, allowNull: false}
    });

    return Item;
};