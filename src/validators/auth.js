const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

// Email validation rules
const validateEmail = [

    check('email')
        .exists()
        .isLength({ min: 5 })
        .withMessage('El correo debe contener mas de 5 caracteres')
        .isEmail()
        .withMessage('No contiene un formato de email valido'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

// Password validation rules
const validateNewPassword = [

    check('newPassword')
        .exists()
        .isLength({ min: 6 })
        .withMessage('La contraseña debe contener mas de 6 caracteres'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

// ChangePassword validation rules
const validateChangePassword = [

    check('password')
        .exists()
        .isLength({ min: 6 })
        .withMessage('La contraseña debe contener mas de 6 caracteres'),
    check('confirmpassword')
        .exists(),
    (req, res, next) => {
        if (req.body.password == req.body.confirmpassword) {
            validateResult(req, res, next)
        } else {
            return res.status(404).json({ 'status': 404, 'msg': 'Las contraseñas no coinciden' })
        }
    }
]

// SignIn validation rules
const validateLogin = [

    check('email')
        .exists()
        .isLength({ min: 5 })
        .withMessage('El correo debe contener mas de 5 caracteres')
        .isEmail()
        .withMessage('No contiene un formato de email valido'),
    check('password')
        .exists()
        .isLength({ min: 6 })
        .withMessage('La contraseña debe contener mas de 6 caracteres'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

// Register validation rules
const validateRegister = [

    check('email')
        .exists()
        .isLength({ min: 5 })
        .withMessage('El correo debe contener mas de 5 caracteres')
        .isEmail()
        .withMessage('No contiene un formato de email valido'),
    check('password')
        .exists()
        .isLength({ min: 6 })
        .withMessage('La contraseña debe contener mas de 6 caracteres'),
    check('confirmPassword')
        .exists()
        .isLength({ min: 6 })
        .withMessage('La contraseña debe contener mas de 6 caracteres'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {
    validateEmail,
    validateNewPassword,
    validateChangePassword,
    validateLogin,
    validateRegister
}