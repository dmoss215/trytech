// define sequelise model for 'activeTry' database table 

module.exports = function (sequelize, DataTypes) {
    var Try = sequelize.define("Try", {
        active_startdate: {type: DataTypes.DATE, allowNull: false},
        active_mailed: {type: DataTypes.DATE}

    });
    

    Try.associate = function (models) {
        // each active try must belong to a single customer (one to one)
        Try.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
            }
        });
    };

    Try.associate = function (models) {
        // each active try must belong to a single product (one to one)
        Try.belongsTo(models.Product, {
            foreignKey: {
                allowNull: false,
            }
        });
    };


    return Try;
};