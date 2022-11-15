const app = require('./server.js');
const http = require('http').createServer(app);
const { sequelize } = require('./database/models/index');

// Port set for .env
const hostname = '127.0.0.1'; // Ip-local hostdirection.
const PORT = process.env.PORT || 4000;

// Starting the server
http.listen(PORT, () => {
    console.log(`App running at: http://${hostname}:${PORT}/`);
    sequelize.sync({ force: false }).then(() => {
        console.log('Database connection is Successfully!!');
    }).catch(error => {
        console.log('Something was wrong. error:', error);
    })
});