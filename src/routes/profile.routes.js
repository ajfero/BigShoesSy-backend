const express = require('express')
const router = express.Router()

/* CONTROLLERS */
const { isAuthenticated } = require('../controllers/auth.controller');
const { getAllProfile, getProfile, updateProfile, isExistProfile } = require('../controllers/profile.controller'); // profileController

/* VALIDATOR */
// const { validateProfile } = require('../validators/profile');

/* ROUTES --> CRUD PROFILE */
router.get('/', isAuthenticated, getAllProfile); // GET --> all Profiles. http://localhost:3000/api/user/profile
router.get('/:id', isAuthenticated, getProfile); // GET --> one Profile. http://localhost:3000/api/user/profile/:id
router.patch('/:id', isAuthenticated, updateProfile); // PATCH --> update a Profile. http://localhost:3000/api/user/profile/:id

/* OTHERS ENDPOINT */
// router.get('/:id', isExist, isAuthenticated, find); // READ one user. http://localhost:3000/api/users/:id
// router.delete('/:id', isExist, isAuthenticated, delete); // DELETE one user. http://localhost:3000/api/users/:id

module.exports = router