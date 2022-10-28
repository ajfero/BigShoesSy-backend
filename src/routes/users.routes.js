const express = require('express')
const router = express.Router()
const { isAuthenticated } = require('../controllers/auth.controller');
const { findAll, isExist, find } = require('../controllers/users.controller');
const { update } = require('../controllers/profile.controller');
const { validateProfile } = require('../validators/profile');

router.get('/find/all', isAuthenticated, findAll); // http://localhost:3000/api/users/find/all

router.get('/:id', isExist, isAuthenticated, find); // http://localhost:3000/api/users/:id

router.put('/:id', isExist, isAuthenticated, update); // http://localhost:3000/api/users/:id

module.exports = router