const Pool = require('pg').Pool;

const dbPool= new Pool(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'additionaldatabase',
        password: 'Pa55w0rd2020',
        port: 5432,
    }
);

module.exports = dbPool