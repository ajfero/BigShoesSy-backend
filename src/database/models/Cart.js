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
      // Cart.belongsTo(models.Detailcart, { foreignKey: "cartId" })// asociaty for get User
      // Cart.hasOne(models.Detailcart, { foreignKey: "cartId" })// asociaty for get User
      // Cart.belongsTo(models.User, { foreignKey: "id" })
    }
  }

  Cart.init({

    userId: {
      allowNull: false,
      onDelete: "CASCADE",
      type: DataTypes.INTEGER,
    },
    status: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },

  }, {
    sequelize,
    modelName: 'Cart',
  });

  // Define association here
  // Cart.associate = function (models) {
  //   // Cart.hasOne(models.User, { foreignKey: "id" }) // asociaty for get User
  //   // Cart.belongsTo(models.User, { as: "user", foreignKey: "id" })
  // };

  return Cart;

};

// const count = await DetailCart.count();

// console.log(count); // 6

// attributes: {
//   include: [
//     [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats']
//   ]
// }
// SELECT COUNT(amountProducts) FROM carts AS totalProducts;
