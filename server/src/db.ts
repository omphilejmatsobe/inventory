const { clientPool } = require('pg');
require('dotenev').config();

export const Pool = new clientPool({
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    password: process.env.POSTGRES_PASSWORD
})

