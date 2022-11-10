'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
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

  Products.init({

    brand: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isAlpha: { msg: "The name should only be letters." },
        len: {
          args: [3, 50],
          msg: "The name must have 3 and 50 letters."
        }
      }
    },
    colorway: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        isAlpha: { msg: "The Lastname should only be letters" },
        len: {
          args: [3, 50],
          msg: "The Lastname must have 3 and 50 letters.s"
        }
      }
    },
    imageUrl: {
      type: DataTypes.INTEGER(20),
      allowNull: true,
      defaultValue: null
    },
    styleId: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: "imgUrl"
    },

  }, {
    sequelize,
    modelName: 'products',
  });

  Products.associate = function (models) {
    // Products.hasMany(models.DetailCart, { foreignKey: "id" }) // asociaty for get User
    // Cart.belongsTo(models.Cart, { as: "cart", foreignKey: "id" })
  };

  return Products;

};