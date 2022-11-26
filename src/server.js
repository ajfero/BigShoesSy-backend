/* Sever.js -> Settings Server */

/**
 *  Imports and Requirements
*/
require("dotenv").config(); // For using environments variables.
const express = require('express'); // Framework { Express } from 'express' for petitions Http.
const cors = require("cors");
const { json } = require("body-parser");

/**
 * App Settings -> Definitions
 */
const app = express();

// Requires to routes
const authRoute = require("./routes/auth.routes");
const usersRoute = require("./routes/users.routes");
const profileRoute = require("./routes/profile.routes");
const messageRoute = require("./routes/message.routes");
const cartRoute = require("./routes/carts.routes");

/**
 * Middleware
*/
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(json())

/**
 * Routes with prefix
*/
app.use("/api", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/user/profile", profileRoute);
app.use("/api/users", cartRoute);
app.use("/api", messageRoute);

// Server statics Files.
app.use('/app', express.static('public')) // http://localhost:9000/app/ le decimos a la app que en la ruta app use la funcion stactic para la carpeta public

//Elimina el cache, para evitar errores con Logout
app.use(function (req, res, next) {
  if (!req.user) { res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate'); }
  next()
})

// if use not found an route then
app.use((req, res, next) => {
  res.status(404).json({
    status: '404',
    descripcion: 'Pagina no encontrada'
  })
})

module.exports = app;