'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Products.belongsToMany(models.Cart, { foreignKey: "productsId" })
    }
  }

  Product.init({

    productId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    colorway: {
      type: DataTypes.STRING(50),
      allowNull: true,

    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "imgUrl"
    },
    retailPrice: {
      type: DataTypes.INTEGER(50),
      allowNull: true,
    },
    styleId: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },

  }, {
    sequelize,
    modelName: 'Product',
  });

  // Define association here
  Product.associate = function (models) {
    // Products.hasMany(models.DetailCart, { foreignKey: "id" }) // asociaty for get User
    // Cart.belongsTo(models.Cart, { as: "cart", foreignKey: "id" })
  };

  return Product;

};

