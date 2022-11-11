const { Router } = require("express");
const router = Router();

/* VALIDATOR */
const { validateChangePassword, validateLogin, validateRegister } = require('../validators/auth');

/* MIDDLEWARES */
const { EmailIsUnique } = require('../middlewares/EmailIsUnique');

/* CONTROLLERS */
const { logIn, register, logOut, changePassword } = require('../controllers/auth.controller');
const { createProfile } = require('../controllers/profile.controller');

/* POLICIES */
// const { update } = require("../policies/PostPolicy");

/* ROUTES */
router.post('/register', validateRegister, EmailIsUnique, register, createProfile) // POST --> http://localhost:3000/api/register
router.post('/login', validateLogin, logIn) // POST --> http://localhost:3000/api/login
router.get('/logout', logOut) // GET --> http://localhost:3000/api/logout
router.post('/change-password', validateChangePassword, changePassword) // POST --> http://localhost:3000/api/change-password

module.exports = router;