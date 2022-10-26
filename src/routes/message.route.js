/**
 * User
*/

// Express library for petitions Http.
const express = require('express');
const router = express.Router(); // Hacemos uso del router.

// GET
router.get("/", (req, res) => {
    res.send("Messages List"); // Send message with to from
});

module.exports = router; // Export our router