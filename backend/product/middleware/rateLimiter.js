const rateLimit = require('express-rate-limit');

// Create a rate limiter for product operations
const productLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 50, // Limit each IP to 50 requests per windowMs
    message: 'Too many product requests from this IP, please try again later.',
});

module.exports = productLimiter;