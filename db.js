const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 100
});

module.exports = pool.promise();