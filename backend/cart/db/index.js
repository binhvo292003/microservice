const { Pool, types } = require('pg');

types.setTypeParser(1700, 'text', parseFloat);


const connectionString = `postgres://postgres:postgres@localhost:5432/cms_microservice`;

const pool = new Pool({
    connectionString: connectionString,
    /*  ssl: {
    rejectUnauthorized: false,
  },*/
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
