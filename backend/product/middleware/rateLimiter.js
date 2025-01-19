const rateLimit = require('express-rate-limit');

// Create a rate limiter for product operations
const productLimiter = rateLimit({
    windowMs: 60 * 1000, // 10 minutes
    max: 500, 
    message: 'Too many product requests from this IP, please try again later.',
});

module.exports = productLimiter;
