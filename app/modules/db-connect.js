const pg = require('pg-promise')();

const connection = process.env.DATABASE_URL ||
    {
        host: 'localhost',
        port: 5430,
        database: 'face_recognition',
        user: 'postgres',
        password: 'password'
    };

module.exports = pg(connection);
