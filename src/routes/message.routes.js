const express = require('express')
const router = express.Router()

const { Message, createMessage } = require('../controllers/message.controller');
const { validateMessage } = require('../validators/message');

router.post('/message', validateMessage, createMessage); // http://localhost:3000/api/contact

module.exports = router