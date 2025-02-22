const rateLimit = require('express-rate-limit');

// Create a rate limiter for inventory operations
const inventoryLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 40, // Limit each IP to 40 requests per windowMs
    message: 'Too many inventory requests from this IP, please try again later.',
});

module.exports = inventoryLimiter;