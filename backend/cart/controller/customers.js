'use strict';
// Include our "db"
const db = require('../db');

// Exports all the functions to perform on the db
module.exports = {
    create,
    findOneById,
    findOneByUsername,
    findOnePasswordByUsername,
    findOneByEmail,
    update,
};

async function findOneById(customerId) {
    try {
        // Generate SQL statement
        const statement = 'SELECT * FROM customer WHERE customer_id = $1';
        const values = [customerId];

        // Execute SQL statment
        const result = await db.query(statement, values);

        if (result.rows?.length) {
            return result.rows[0];
        }

        return null;
    } catch (err) {
        throw err;
    }
}

async function findOneByUsername(username) {
    try {
        // Generate SQL statement
        const statement = 'SELECT * FROM customer WHERE customer.username = $1';
        const values = [username];

        // Execute SQL statment
        const result = await db.query(statement, values);

        if (result.rows?.length) {
            return result.rows[0];
        }

        return null;
    } catch (err) {
        throw err;
    }
}

async function findOnePasswordByUsername(username) {
    try {
        // Generate SQL statement
        const statement =
            'SELECT * FROM customer JOIN customer_login ON customer.customer_id = customer_login.customer_id AND customer.username = $1';
        const values = [username];

        // Execute SQL statment
        const result = await db.query(statement, values);

        if (result.rows?.length) {
            return result.rows[0];
        }

        return null;
    } catch (err) {
        throw err;
    }
}

async function findOneByEmail(email) {
    try {
        // Generate SQL statement
        const statement = 'SELECT * FROM customer WHERE email_address = $1';
        const values = [email];

        // Execute SQL statment
        const result = await db.query(statement, values);

        if (result.rows?.length) {
            return result.rows[0];
        }

        return null;
    } catch (err) {
        throw err;
    }
}

async function create(data) {
    try {
        let { first_name, middle_name, last_name, email_address, username, password } = data;
        const timestamp = new Date();
        const created_at = timestamp.toISOString();

        first_name = first_name ? first_name : 'N/A';
        middle_name = middle_name ? middle_name : 'N/A';
        last_name = last_name ? last_name : 'N/A';

        await db.query('BEGIN');
        // Generate SQL statement
        let statement =
            'INSERT INTO customer (first_name, middle_name, last_name, email_address, username, created_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING customer_id, first_name, middle_name, last_name, email_address, username,created_at';
        let values = [first_name, middle_name, last_name, email_address, username, created_at];
        // Execute SQL statment
        const result = await db.query(statement, values);

        // Generate SQL statement
        statement =
            'INSERT INTO customer_login (customer_id, password_hash, locked_out) VALUES ($1, $2, false) RETURNING login_id';
        values = [result.rows[0].customer_id, password];
        // Execute SQL statment
        const loginId = await db.query(statement, values);

        if (result.rows?.length && loginId.rows?.length) {
            await db.query('COMMIT');

            // Returns full data record incl. address information
            //return result.rows[0];
            console.log('test: ', result.rows[0].customer_id);
            return await findOneById(result.rows[0].customer_id);
        }

        await db.query('ROLLBACK');
        return null;
    } catch (err) {
        await db.query('ROLLBACK');
        throw err;
    }
}

async function update(data) {
    try {
        const { id, customer_id, first_name, middle_name, last_name, email_address } = data;

        // Make sure req body data belongs to req params
        if (parseInt(id) !== parseInt(customer_id)) throw { message: 'Parameter mismatch request' };

        await db.query('BEGIN');
        // Generate SQL statement
        let statement =
            'UPDATE customer SET first_name = $1, middle_name = $2, last_name = $3, email_address = $4 WHERE customer_id = $5';
        let values = [first_name, middle_name, last_name, email_address, customer_id];
        // Execute SQL statment
        await db.query(statement, values);

        await db.query('COMMIT');

        return await findOneById(customer_id);
    } catch (err) {
        await db.query('ROLLBACK');
        throw err;
    }
}
