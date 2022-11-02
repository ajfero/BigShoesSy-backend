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

    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        isAlpha: { msg: "El nombre solo debe contener letras" },
        len: {
          args: [3, 50],
          msg: "El nombre debe contener entre 3 a 50 letras"
        }
      },
      defaultValue: "User"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notNull: { msg: "Email required" },
        isEmail: { msg: "Invalid Email format" },
        len: {
          args: [5, 100],
          msg: "The email only should by max 100 Characters"
        }
      }
    },
    subject: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notNull: { msg: "Subject required" },
        len: {
          args: [10, 100],
          msg: "The message should by max 10 Characters"
        }
      }
    },
    message: {
      type: DataTypes.TEXT(256),
      allowNull: false,
      validate: {
        notNull: { msg: "Message required" },
        len: {
          args: [20, 256],
          msg: "The message should by max 20 Characters"
        }
      }
    },

  }, {
    sequelize,
    modelName: 'Message',
  });

  return Message;
};