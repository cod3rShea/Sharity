module.exports = function (sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
        foodItemDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amout: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherComments: {
            type: DataTypes.STRING,
            allowNull: false
        },
        storageRequirements: {
            type: DataTypes.STRING,
            allowNull: false
        },

        pickUpDeadline: {
            type: DataTypes.STRING,
            allowNull: false
        },

        vendorId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isActive: {
            type: DataTypes.STRING,
            allowNull: false
        },
        claimedBy: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dollarValue: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pickUpDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return Inventory;
};