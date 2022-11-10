'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
 * Helper method for defining associations.
 * This method is not a part of Sequelize lifecycle.
 * The `models/index` file will call this method automatically.
 */
    static associate(models) {
      // Define association here
      User.belongsTo(models.Profile, { as: "user", foreignKey: "userId" });
      User.belongsTo(models.Cart, { as: "user", foreignKey: "cartId" });
    }
  }

  User.init({

    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: "Email required" },
        isEmail: { msg: "Format email invalid" },
        len: {
          args: [5, 100],
          msg: "The email have must 100 characters max"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resetToken: {
      type: DataTypes.STRING(1020),
      allowNull: true
    },
    refreshToken: {
      type: DataTypes.STRING(1020),
      allowNull: true
    }

  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = function (models) {
    // User.hasOne(models.Cart, { foreignKey: "userId" });
    // User.hasOne(models.Profile, { foreignKey: "userId" }) // asociaty for get User
  };


  // Comprueba rol admin
  User.isAdmin = function (roles) {
    let tmpArray = [];
    roles.forEach(role => tmpArray.push(role.role));

    return tmpArray.includes('admin');
  }

  return User;

};