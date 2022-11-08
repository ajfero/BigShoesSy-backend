const express = require('express')
const router = express.Router()

/* CONTROLLERS */
const { isAuthenticated } = require('../controllers/auth.controller');
const { isExist, findAll, find } = require('../controllers/users.controller'); // userController

/* VALIDATOR */
// const { validateProfile } = require('../validators/profile');

/* CRUD USERS */
// router.post('/', isExist, isAuthenticat0ed, create); // CREATE one user. http://localhost:3000/api/users/
router.get('/find/all', isAuthenticated, findAll); // get all users. http://localhost:3000/api/users/find/all
router.get('/:id', isExist, isAuthenticated, find); // READ one user. http://localhost:3000/api/users/:id
// router.put('/:id', isExist, isAuthenticated); // UPDATE one user. http://localhost:3000/api/users/:id
// router.delete('/:id', isExist, isAuthenticated, delete); // DELETE one user. http://localhost:3000/api/users/:id


/* OTHERS ENDPOINT */
// router.get('/:id', isExist, isAuthenticated, find); // get one user. http://localhost:3000/api/users/:id

module.exports = router