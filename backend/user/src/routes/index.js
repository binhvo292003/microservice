const express = require('express');
const router = express.Router();
const userController = require('../controllers');
const rateLimiter = require('../middleware/rateLimiter');

// Google OAuth2 routes
router.get('/auth/google', userController.googleAuth);
router.get('/auth/google/callback', userController.googleAuthCallback);
router.get('/profile', userController.getProfile);

// Apply rate limiter to sensitive routes
router.use(rateLimiter);

// Other user-related routes
router.get('/users', userController.getAllUsers);

module.exports = router;
