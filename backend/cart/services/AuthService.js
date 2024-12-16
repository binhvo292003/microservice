'use strict';
const createError = require('http-errors');
const customerController = require('../controller/customers');
const bcrypt = require('bcrypt');
const saltRounds = 14;

// Exports all the functions to perform on the db
module.exports = { register, login };

async function register(data) {
    const { username, email_address, password } = data;


    try {
        // Check if username already exists
        let user = await customerController.findOnePasswordByUsername(username);

        // If username already exists, reject
        if (user) {
            throw createError(409, 'Username already in use');
        }
        // Check if email already exists
        const email = await customerController.findOneByEmail(email_address);

        // If email already exists, reject
        if (email) {
            throw createError(409, 'Email already in use');
        }

        console.log(`Username: ${username}, Password: ${password}, Salt: ${saltRounds}`);
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return await customerController.create({ ...data, password: hashedPassword });
    } catch (err) {
        throw err;
    }
}

async function login(data) {
    const { username, password } = data;

    try {
        let user = await customerController.findOnePasswordByUsername(username);

        if (!user) {
            throw createError(401, 'Incorrect username or password');
        }

        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) {
            throw createError(401, 'Incorrect username or password');
        }

        user = await customerController.findOneByUsername(username);

        return user;
    } catch (err) {
        throw err;
    }
}
