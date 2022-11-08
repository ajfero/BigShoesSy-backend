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
      User.hasOne(models.Profile, { foreignKey: "userId" })
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
    // User.hasOne(models.Profile, { as: "profile", foreignKey: "userId" });
    // User.belongsTo(models.Profile, { as: "user", foreignKey: "userId" });
  };


  // Comprueba rol admin
  User.isAdmin = function (roles) {
    let tmpArray = [];
    roles.forEach(role => tmpArray.push(role.role));

    return tmpArray.includes('admin');
  }

  return User;

};

//testready

// test

// User.hasOne(models.Profile);
// User.belongsTo(models.Profile);

// User.belongsTo(models.Profile, { as: "user", foreignKey: "id" });
// User.hasMany(models.Profile, { as: "profile", foreignKey: "userId" });
// User.hasMany(models.Carts, { as: "carts", foreignKey: "cartsId" });
// User.hasMany(models.Messages, { as: "messages", foreignKey: "userId" });
// User.belongsTo(models.Profile, { as: "profiles", foreignKey: "usersId" });
// User.belongsToMany(models.Role, { as: "roles", through: "user_role", foreignKey: "user_id" });