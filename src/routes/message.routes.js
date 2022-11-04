const express = require('express')
const router = express.Router()

const { validateMessage } = require('../validators/message');
const { Message, createMessage } = require('../controllers/message.controller');  // messageController

router.post('/message', validateMessage, createMessage); // http://localhost:3000/api/contact

module.exports = router