/* Sever.js Settings Server */

/**
 *  Imports and Requirements
*/
const express = require('express'); // Framework { Express } from 'express' for petitions Http.
require("dotenv").config(); // For using environments variables.
// const router = require('./config/network'); // Router -> Api Routes config
// const router = require('./app/network/router');

/**
 * App Settings -> Definitions
*/
var app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 9000; // http://localhost/9000

/**
 * Middleware
*/
app.use(express.json());
// router(app);

/**
 * Routes -> Prefix
*/
// app.use("/api", routes);

// Create a route for /root
app.use('/', function (req, res) {
    res.send('Hello, World!\n');
});

/**
 * Create Server -> Server listening
*/
app.listen(port, hostname, () => {
    console.log(`app running at http://${hostname}:${port}/`); // http://localhost/9000
});
