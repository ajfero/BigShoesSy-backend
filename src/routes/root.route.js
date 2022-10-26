// Express library for petitions Http.
const express = require('express');
const router = express.Router(); // Hacemos uso del router.

// GET
router.get("/", (req, res) => {
    res.send("Welcome to the BigShoesSy Api-Rest");
});

module.exports = router; // Export our router