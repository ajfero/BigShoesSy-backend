const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

// Cart validation rules
const validateCart = [

    check('userId')
        .exists()
        .isString()
        .withMessage('an "id" is needed in the route'),
    check('arrayProducts')
        .exists()
        .isArray()
        .withMessage('an "arrayProducts" is needed in req.body'),
    check('status')
        .exists()
        .isBoolean()
        .withMessage('an "status" is needed in req.body'),
    (req, res, next) => {
        validateResult(req, res, next)
    }

]

module.exports = { validateCart }