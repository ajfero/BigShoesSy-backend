const mysql = require("mysql");
const app = require('./server.js');
const http = require('http').createServer(app);
const { sequelize } = require('./database/models/index');
const { config } = require("dotenv");

/***************** Local Enviroment set to .env ******************/
const localhost = '127.0.0.1'; // Ip-local hostdirection.
const port = process.env.PORT || 3000;

// Starting the server
http.listen(port, () => {
    console.log(`App running at: http://${localhost}:${port}/`);
    sequelize.sync({ force: false }).then(() => {
        console.log('Database connection is Successfully!!');
    }).catch(error => {
        console.log('Something was wrong. error:', error);
    })
});

/***************** Prod Enviroment *******************************/
// const db = mysql.createConnection({
//     host: process.env.DB_HOST || '127.0.0.1',
//     port: process.env.DB_PORT || 3000,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD, //this is a really bad idea
//     database: process.DB_DATABASE
// });

// db.connect((err) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     console.log("Api connect to Database AWS RDS Success!!");
// });