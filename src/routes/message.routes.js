const express = require('express')
const router = express.Router()

/* VALIDATOR */
const { validateMessage } = require('../validators/message');

/* CONTROLLERS */
const { createMessage } = require('../controllers/message.controller'); // messageController

/* ROUTES --> CRUD MESSAGES */
router.post('/message', validateMessage, createMessage); // POST --> create message http://localhost:3000/api/contact

module.exports = router