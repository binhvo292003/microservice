const rateLimit = require('express-rate-limit');

// Create a rate limiter for user operations
const userLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 300, // Limit each IP to 30 requests per windowMs
    message: 'Too many user requests from this IP, please try again later.',
});

module.exports = userLimiter;