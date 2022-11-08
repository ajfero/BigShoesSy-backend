// Express
const { Router } = require("express");
const router = Router();

// Controllers
const { logIn, register, logOut, changePassword } = require('../controllers/auth.controller');
const { createProfile } = require('../controllers/profile.controller');

// Validator
const { validateChangePassword, validateLogin, validateRegister } = require('../validators/auth');

// Middlewares
const { EmailIsUnique } = require('../middlewares/EmailIsUnique');

/* POLICIES */
// const { update } = require("../policies/PostPolicy");

/* Routes */
router.post('/register', validateRegister, EmailIsUnique, register, createProfile) // http://localhost:3000/api/register
router.post('/login', validateLogin, logIn) // http://localhost:3000/api/login
router.get('/logout', logOut) // http://localhost:3000/api/logout
router.post('/change-password', validateChangePassword, changePassword) // http://localhost:3000/api/change-password

module.exports = router;