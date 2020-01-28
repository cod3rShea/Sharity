const db = require('../models');

module.exports = function (sequelize, DataTypes) {
    var Vendor = sequelize.define("Vendor", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        businessName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        EIN: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
             allowNull: false
        },
        refrigeration: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dropoff: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
      classMethods: {
        associate: function(models) {
            Vendor.hasOne(models.User);
            Vendor.hasOne(models.Address);
        }
    }
      });

    return Vendor;
};