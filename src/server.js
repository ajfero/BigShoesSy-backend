// import { Express } from 'express';
const express = require('express');

// Settings Definitions
const hostname = '127.0.0.1';
const port = 3000;

var app = express();

// Create a route for /root
app.use('/', function (req, res) {
    res.send('Hello, World!\n');
});

// App definitions using framework express.
app.listen(port, hostname, () => {
    console.log(`app running at http://${hostname}:${port}/`);
});
