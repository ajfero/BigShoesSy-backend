const express = require('express')
const router = express.Router()

/* CONTROLLERS */
const { createCart, getCart } = require('../controllers/carts.controller');
const { createDetailsCart, } = require('../controllers/detailsCart.controller');

const { isAuthenticated } = require('../controllers/auth.controller');
const { isExist, find } = require('../controllers/users.controller'); // userController

/* VALIDATOR */

/* CRUD CARTS */
router.patch('/:id/cart', isAuthenticated, createCart, createDetailsCart); // create a cart for an user. http://localhost:3000/api/users/:id/cart
router.get('/:id/cart', isExist, isAuthenticated,); // READ one user. http://localhost:3000/api/users/:id


module.exports = router