/* Sever.js -> Settings Server */

/**
 *  Imports and Requirements
*/
const express = require('express'); // Framework { Express } from 'express' for petitions Http.
const router = require('./config/routes'); // Routes -> Config Api Routes config

require("dotenv").config(); // For using environments variables.

/**
 * App Settings -> Definitions
*/
var app = express();
const hostname = '127.0.0.1'; // Ip-local hostdirection.
const port = process.env.PORT || 3000; // http://localhost/9000/api

/**
 * Middleware
*/
app.use(express.json()); // usamos la efuncion de express para que nuestra app devuelva un json.
app.use(express.urlencoded({ extended: false })); // to-do: resolver el con el body-parsel (Resuelto)

/**
 * Routes with prefix
 */
router(app);
// app.use("/api", routes);

// Server statics Files.
app.use('/app', express.static('public')) // http://localhost:9000/app/ le decimos a la ppa que en la ruta app use la funcion stactic para la carpeta public

/**
 * Create Server -> Server listening
*/
app.listen(port, hostname, () => {
    console.log(`app running at http://${hostname}:${port}/`); // http://localhost/9000
});
