const express = require('express')
const router = express.Router()

/* VALIDATOR */
const { validateCart } = require('../validators/cart');

/* CONTROLLERS */
const { createCart, getCart } = require('../controllers/carts.controller'); // cartController
const { createDetailsCart, } = require('../controllers/detailsCart.controller'); // detailsCartContoller
const { isAuthenticated } = require('../controllers/auth.controller'); // authController
const { isExist, find } = require('../controllers/users.controller'); // userController

/* ROUTES --> CRUD CARTS */
router.patch('/:id/cart', isAuthenticated, createCart, createDetailsCart); // PATCH --> create a cart for an user. http://localhost:3000/api/users/:id/cart
router.get('/:id/cart', isExist, isAuthenticated,); // GET --> one cart. http://localhost:3000/api/users/:id


module.exports = router