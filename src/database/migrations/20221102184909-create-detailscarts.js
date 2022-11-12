'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detailscarts', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cartId: {
        allowNull: false,
        references: {
          model: "carts",
          key: "id"
        },
        onDelete: "CASCADE",
        type: Sequelize.INTEGER,
      },
      productsId: {
        allowNull: false,
        onDelete: "CASCADE",
        type: Sequelize.STRING,
      },
      quantityProduct: {
        allowNull: false,
        defaultValue: 1,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('detailscarts');
  }
};