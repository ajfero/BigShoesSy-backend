'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('profiles', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        references: {
          model: "users",
          key: "id"
        },
        onDelete: "CASCADE",
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      lastname: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      phone: {
        unique: true,
        allowNull: true,
        type: Sequelize.INTEGER(20)
      },
      imgUrl: {
        allowNull: true,
        type: Sequelize.STRING(100),
        default: 'notFound'
      },
      socialRed: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING(20),
        defaultValue: "user"
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
    await queryInterface.dropTable('profiles');
  }
};