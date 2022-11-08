require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const app = express();

//Requires to routes
const authRoute = require("./routes/auth.routes");
const usersRoute = require("./routes/users.routes");
const profileRoute = require("./routes/profile.routes");
const messageRoute = require("./routes/message.routes");

//Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(json())

// Routes
app.use("/api", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/user/profile", profileRoute);
app.use("/api", messageRoute);

//Elimina el cache, para evitar errores con Logout
app.use(function (req, res, next) {
  if (!req.user) { res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate'); }
  next()
})

app.use((req, res, next) => {
  res.status(404).json({
    status: '404',
    descripcion: 'Pagina no encontrada'
  })
})

module.exports = app;