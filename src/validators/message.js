const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

// Messages validation rules
const validateMessage = [

    check('name')
        .exists()
        .isLength({ min: 3, max: 50 })
        .withMessage('El nombre debe contener entre 3 a 50 caracteres')
        .isString()
        .withMessage('El nombre debe contener solo letras'),
    check('email')
        .exists()
        .isLength({ min: 5, max: 100 })
        .withMessage('El correo debe contener entre 5 a 100 caracteres')
        .isEmail()
        .withMessage('No contiene un formato de email valido'),
    check('subject')
        .exists()
        .isLength({ min: 10, max: 100 })
        .withMessage('El Titulo debe contener entre 10 a 100 caracteres'),
    check('message')
        .exists()
        .isLength({ min: 20, max: 256 })
        .withMessage('El Mensage debe contener entre 20 a 256 caracteres'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateMessage }