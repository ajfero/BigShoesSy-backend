/**
 * Response Module -> Modulo de respuestas.
 * Nos permitira responder con diferentes tipos de variables y no solo con texto plano
*/

// Succesfull method
exports.successful = function (req, res, message, status) { // definimos los parametros que podemos en responder.
    // res.send('First response'); // string

    // Object response
    // res.send({
    //     error: "",
    //     body: message
    // });

    // Object status
    res.status(status || 200).send({
        error: "",
        body: message
    });

}

// Error method
exports.error = function (req, res, message, status, details) {
    // Show error to the User and a different Error for server in the Log.
    console.error('\x1b[33m%s\x1b[0m', '[response-error] ', details); // Devolvemos en nuestro Log del server informacion clara para el desarrollador.

    res.status(status || 500).send({
        error: message,
        body: '',
    });

}

/************ Colors ************/

// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"
