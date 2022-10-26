/* Message Controller */

const store = require('../store/message.store'); // Required Data Layer of message.

/// addMessage
function addMessage(user, message) {
    // Show in console the data received from petition route.
    // console.log(user); // Show User
    // console.log(message); // Show message

    // Every promise return a Resolve(Resolution or Rechazo) // With the promise we are respond if a condition required aren't ok.
    return new Promise((resolve, reject) => {

        if (!user || !message) { // If there isn't a User or Message return false

            console.error('\x1b[33m%s\x1b[0m', '[messageController-error] ', 'User or Message notFound.'); // error in log server console.
            reject('Los datos son incorrectos, No se pudo crear el message') // Reject of the request with a message.
            return false

        }

        // Constructor of the object message
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        // console.log(fullMessage) // Show fullMessage.
        // resolve(fullMessage) // Resolve the promise

        // Using Data Layer for store data. // Using module functions from store
        store.add(fullMessage) // Nos traemos la funcion del modulo store
        resolve(fullMessage) // Resolve the promise
        console.log(fullMessage) // Show fullMessage.

    })
}

// getMessage
function getMessage(user, message) {

    return new Promise((resolve, reject) => { // Every function response a promise or return a response if our controller fail!
        resolve(store.list()) // Using .list for get many elements (.get is for a only one element)
    })

}

// Export functions for use in the route.
module.exports = {
    addMessage,
    getMessage,
}