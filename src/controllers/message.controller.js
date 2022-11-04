const { Message } = require('../database/models/index');
const sequelize = require('sequelize');

// Create Message from "ContactUs"
const createMessage = async (req, res) => {
    //Se obtienen los valores
    const { name, email, subject, message } = req.body

    // Crear Message
    Message.create({
        // Asignamos los valores
        name: name,
        email: email,
        subject: subject,
        message: message

    }).then((message) => {
        res.status(200).json({ status: 200, msg: "Usuario creado correctamente", message });
    })
        .catch((error) => {
            //Error al crear usuario
            res.status(400).json({ status: 400, msg: error });
        });
};

module.exports = {
    createMessage
}