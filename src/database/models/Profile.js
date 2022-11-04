'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Profile.init({

    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id"
      },
      onDelete: "CASCADE",
    },
    name: {
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
    lastname: {
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
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "null"
    },
    imgUrl: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: "picureUser"
    },
    socialRed: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: "@"
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "user"
    }

  }, {
    sequelize,
    modelName: 'Profile',
  });

  Profile.associate = function (models) {
    Profile.belongsTo(models.User, { as: "user", foreignKey: "userId" })
  };

  return Profile;
};