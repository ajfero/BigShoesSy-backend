const { Message } = require('../database/models/index');
const sequelize = require('sequelize');

// Create Message from "ContactUs"
const createMessage = async (req, res) => {

    // get values of body
    const { userId, name, email, subject, message } = req.body

    // Create Message
    Message.create({
        // Assign values to messages
        userId: userId,
        name: name,
        email: email,
        subject: subject,
        message: message

    }).then((message) => {
        res.status(200).json({ status: 200, msg: "Usuario creado correctamente", message });
    })
        .catch((error) => {
            res.status(400).json({ status: 400, msg: error });
        });

};

module.exports = {
    createMessage
}