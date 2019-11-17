const pg = require('pg-promise')();


module.exports = pg({
    host: 'localhost',
    port: 5430,
    database: 'face_recognition',
    user: 'postgres',
    password: 'password'
});
