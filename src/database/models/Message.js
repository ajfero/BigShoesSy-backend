'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Message.init({

    userId: {
      allowNull: true,
      references: {
        model: "users",
        key: "id"
      },
      onDelete: "CASCADE",
      type: DataTypes.INTEGER,
      defaultValue: "null"
    },
    name: {
      allowNull: false,
      validate: {
        isAlpha: { msg: "The name should only be letters." },
        len: {
          args: [3, 50],
          msg: "The name must have 3 and 50 letters."
        }
      },
      type: DataTypes.STRING(50),

    },
    email: {
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: "Email required" },
        isEmail: { msg: "Format email invalid" },
        len: {
          args: [5, 100],
          msg: "The email have must 100 characters max"
        }
      },
      type: DataTypes.STRING(100)
    },
    subject: {
      allowNull: false,
      validate: {
        notNull: { msg: "Subject required" },
        len: {
          args: [10, 100],
          msg: "The message should by max 10 Characters"
        }
      },
      type: DataTypes.STRING(100)
    },
    message: {
      allowNull: false,
      validate: {
        notNull: { msg: "Message required" },
        len: {
          args: [20, 256],
          msg: "The message should by max 20 Characters"
        }
      },
      type: DataTypes.STRING(1024)
    },

  }, {
    sequelize,
    modelName: 'Message',
  });

  Message.associate = function (models) {
    Message.belongsTo(models.User, { as: "owner", foreignKey: "userId" })
  };

  return Message;
};