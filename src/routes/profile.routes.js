const express = require('express')
const router = express.Router()

/* CONTROLLERS */
const { isAuthenticated } = require('../controllers/auth.controller');
const { isExist, findAll, find, } = require('../controllers/users.controller'); // userController
const { getAllProfile, getProfile } = require('../controllers/profile.controller'); // profileController

/* VALIDATOR */
// const { validateProfile } = require('../validators/profile');

/* CRUD PROFILE USER */
router.get('/profile', getAllProfile); // READ one user. http://localhost:3000/api/users/:id
router.get('/profile/:id', getProfile); // READ one user. http://localhost:3000/api/users/profile

/* OTHERS ENDPOINT */
// router.post('/', isExist, isAuthenticat0ed, create); // CREATE one user. http://localhost:3000/api/users/
// router.get('/:id', isExist, isAuthenticated, find); // READ one user. http://localhost:3000/api/users/:id
// router.put('/:id', isExist, isAuthenticated); // UPDATE one user. http://localhost:3000/api/users/:id
// router.delete('/:id', isExist, isAuthenticated, delete); // DELETE one user. http://localhost:3000/api/users/:id

module.exports = router