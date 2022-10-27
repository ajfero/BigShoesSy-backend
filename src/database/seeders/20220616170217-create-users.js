'use strict';

const {User} = require('../models/index');
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([

      User.create({
        name: "ejemplo",
        password: bcrypt.hashSync("secret", 10),
        email: "ejemplo@syloper.com",
        role:'user'
      }),
      User.create({
        name: "admin",
        password: bcrypt.hashSync("hola", 10),
        email: "admin@syloper.com",
        role:'admin'
      })
      
    ])

  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bullDelete('users', null, {})
    ])
  }
};
