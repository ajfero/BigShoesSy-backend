/* Message Route */

// Express library for petitions Http.
const express = require('express');
const response = require('../config/response'); // Importamos nuestro modulo de respuestas
const controller = require('../controllers/message.controller'); // Import the messageController

const router = express.Router(); // Hacemos uso del router.

/**
 * A new directory for routes from server.js for a manage route module
 * Podremos eliminar ahora las rutas de /menssage -> por / y nuestro
 * Manejador de routas (routes.js) hara por nosotros el manejo de ellas segun el component en este caso message.
*/

// GET
router.get("/", (req, res) => {

    // Apply MessageController -> getMessage from messageStore.
    controller.getMessage(req.body.user, req.body.message)
        .then((messageList) => { // Define messageList for received a list of Message from store.
            response.successful(req, res, messageList, 201);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 400, e);
            // response.error(req, res, 'Unexpected Error -> Something is wrong', 400, 'Error en el controller-store getMessage');
        })

});

// POST
router.post("/", (req, res) => {

    // Apply MessageController -> addMessage from messageStore.
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            // response.successful(req, res, 'Msj Created Successful - POST', 201); // Simple request (We aren't an property)
            response.successful(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Something was wrong', 400, 'Error en el controlador message');
        })

});

// DELETE
router.delete("/", (req, res) => {

    // Handling Errors -> Manejando los errores. Condicionando el comportamiento de la ruta.
    if (req.query.error == "ok") {
        // response.error(req, res, 'Error Hardcode', 400);
        response.error(req, res, 'Something is wrong', 500, 'Is a simulation for log errors');
    }
    else {
        response.successful(req, res, 'Msj Delete Successful');
    }
    console.log(req.body);

});

// GET -> with a specific route
router.get("/private", (req, res) => {

    msj = res.send("Messages Privates"); //
    console.log(msj); //

});

module.exports = router; // Export our router