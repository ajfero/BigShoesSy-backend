const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateProfile = [
    
    check('name')
        .exists()
        .isLength({min:3, max:50})
        .withMessage('El nombre debe contener entre 3 a 50 caracteres')
        .isString()
        .withMessage('El nombre debe contener solo letras'),
    check('email')
        .exists()
        .isLength({min:5, max:100})
        .withMessage('El correo debe contener entre 5 a 100 caracteres')
        .isEmail()
        .withMessage('No contiene un formato de email valido'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateProfile }