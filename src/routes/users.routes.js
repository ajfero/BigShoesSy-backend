const express = require('express')
const router = express.Router()

/* CONTROLLERS */
const { isAuthenticated } = require('../controllers/auth.controller');
const { isExist, findAll, find, } = require('../controllers/users.controller'); // userController
const { getProfile, updateProfile } = require('../controllers/profile.controller'); // profileController

/* VALIDATOR */
// const { validateProfile } = require('../validators/profile');

/* CRUD USERS */
// router.post('/', isExist, isAuthenticat0ed, create); // CREATE one user. http://localhost:3000/api/users/
router.get('/:id', isExist, isAuthenticated, getProfile); // READ one user. http://localhost:3000/api/users/:id
router.put('/:id', isExist, isAuthenticated, updateProfile); // UPDATE one user. http://localhost:3000/api/users/:id
// router.delete('/:id', isExist, isAuthenticated, delete); // DELETE one user. http://localhost:3000/api/users/:id

/* OTHERS ENDPOINT */
router.get('/find/all', isAuthenticated, findAll); // get all users. http://localhost:3000/api/users/find/all
// router.get('/:id', isExist, isAuthenticated, find); // get one user. http://localhost:3000/api/users/:id

module.exports = router