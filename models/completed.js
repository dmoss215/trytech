// define sequelise model for 'completed' database table 

module.exports = function (sequelize, DataTypes) {
    var Completed = sequelize.define("Completed", {
        comleted_subscription: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        completed_dateout: {
            type: DataTypes.DATE,
            allowNull: false
        },
        completed_dateback: {
            type: DataTypes.DATE,
            allowNull: false
        }

    });


    Completed.associate = function (models) {
        // each active try must belong to a single customer (one to one)
        Completed.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
            }
        });
        
        Completed.belongsTo(models.Product, {
            foreignKey: {
                allowNull: false,
            }
        });
    };

    return Completed;
};