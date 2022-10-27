const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

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

const validateNewPassword = [

    check('newPassword')
        .exists()
        .isLength({ min: 6 })
        .withMessage('La contraseña debe contener mas de 6 caracteres'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

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

module.exports = { validateEmail, validateNewPassword, validateChangePassword, validateLogin, validateRegister }