/* Message Store */

const list = []; // Mock de lista de mensajes vacia

// Creamos la funcion addMessage es buena practica renombrarlas todas similar.
function addMessage(message) {
    list.push(message); // return push message.
}

// Creamos la funcion getMessage es buena practica renombrarlas todas similiar.
function getMessages() {
    return list; // return list
}

module.exports = {

    add: addMessage, // Define name for function.
    list: getMessages, // Define name for function.

}

