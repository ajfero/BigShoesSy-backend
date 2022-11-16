'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('messages', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: true,
        references: {
          model: "users",
          key: "id"
        },
        onDelete: "CASCADE",
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      subject: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      message: {
        allowNull: false,
        type: Sequelize.STRING(1024)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('messages');
  }
};