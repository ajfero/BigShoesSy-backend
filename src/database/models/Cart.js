'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Cart.init({

    userId: {
      allowNull: false,
      references: {
        model: "users",
        key: "id"
      },
      onDelete: "CASCADE",
      type: DataTypes.INTEGER,
    },
    status: {
      allowNull: false,
      type: DataTypes.TEXT(1000)
    },

  }, {
    sequelize,
    modelName: 'Cart',
  });

  // Define association here
  Cart.associate = function (models) {
    // Cart.belongsTo(models.User, { as: "user", foreignKey: "id" })
  };

  return Cart;

};