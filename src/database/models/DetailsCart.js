'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DetailsCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // DetailsCart.hasOne(models.Cart, { foreignKey: "cartId" })
      // DetailsCart.belongsTo(models.Cart, { foreignKey: "id" })
      // DetailsCart.hasMany(models.Products, { foreignKey: "id" })
    }
  }

  DetailsCart.init({

    cartId: {
      allowNull: false,
      references: {
        model: "carts",
        key: "id"
      },
      onDelete: "CASCADE",
      type: DataTypes.INTEGER,
    },
    productsId: {
      allowNull: false,
      references: {
        model: "products",
        key: "id"
      },
      onDelete: "CASCADE",
      type: DataTypes.INTEGER,
    },
    quantityProduct: {
      allowNull: false,
      type: DataTypes.INTEGER
    },

  }, {
    sequelize,
    modelName: 'DetailsCart',
  });

  // Define association here
  DetailsCart.associate = function (models) {
    // DetailsCart.hasOne(models.Cart, { foreignKey: "carId" }) // asociaty for get User
    // DetailsCart.hasMany(models.Products, { foreignKey: "id" }) // asociaty for get User
  };

  return DetailsCart;

};