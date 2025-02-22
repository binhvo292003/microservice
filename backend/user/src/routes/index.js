const express = require('express');
const router = express.Router();
const userController = require('../controllers');
const rateLimiter = require('../middleware/rateLimiter');
const { verifyAccessToken, authorizeRole } = require('../middleware');

// Apply rate limiter to sensitive routes
router.use(rateLimiter);

// Google OAuth2 routes
router.get('/auth/google', userController.googleAuth);
router.get('/auth/google/callback', userController.googleAuthCallback);
router.get('/profile', verifyAccessToken, userController.getProfile);

// Public user-related routes
router.post('/auth/register', userController.register);
router.post('/auth/login', userController.login);
router.post('/auth/refresh-token', userController.refreshToken);
router.post('/auth/logout', userController.logout);

// Protected Routes
router.get('/auth/protected', verifyAccessToken, userController.protectedRoute);

// Role-Secured Routes
router.get('/admin-dashboard', verifyAccessToken, authorizeRole('Admin'), (req, res) => {
    res.json({ message: 'Welcome, Admin!' });
});

router.get('/seller-dashboard', verifyAccessToken, authorizeRole('Seller', 'Admin'), (req, res) => {
    res.json({ message: 'Welcome, Seller!' });
});

router.get(
    '/customer-dashboard',
    verifyAccessToken,
    authorizeRole('Customer', 'Admin'),
    (req, res) => {
        res.json({ message: 'Welcome, Customer!' });
    }
);

module.exports = router;
