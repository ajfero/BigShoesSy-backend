const express = require('express')
const router = express.Router()

/* CONTROLLERS */
const { isAuthenticated } = require('../controllers/auth.controller');
const { isExist, findAll, find, updateUser, deleteUser } = require('../controllers/users.controller'); // userController

/* VALIDATOR */
// const { validateProfile } = require('../validators/profile');

/* ROUTES --> CRUD PROFILE */
router.get('/find/all', isAuthenticated, findAll); // GET --> all users. http://localhost:3000/api/users/find/all
router.get('/:id', isExist, isAuthenticated, find); // READ --> one user. http://localhost:3000/api/users/:id
router.put('/:id', isExist, isAuthenticated, updateUser); // UPDATE --> one user. http://localhost:3000/api/users/:id
router.delete('/:id', isExist, isAuthenticated, deleteUser); // DELETE --> one user. http://localhost:3000/api/users/:id

/* OTHERS ENDPOINT */

module.exports = router