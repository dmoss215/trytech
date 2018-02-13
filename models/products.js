// define sequelise model for 'products' database table 

module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        product_name: {type: DataTypes.STRING, allowNull: false},
        manufacturer: {type: DataTypes.STRING},
        product_description: {type: DatatTypes.TEXT},
        retail_price: {type: DataTypes.DECIMAL(10, 2)},
        image_url: {type: DataTypes.STRING},
        rating: {type: DataTypes.FLOAT},
        units_available: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0}
    });

    return Product;
};





