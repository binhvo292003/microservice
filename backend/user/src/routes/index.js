const express = require('express');
const router = express.Router();
const userController = require('../controllers');
const rateLimiter = require('../middleware/rateLimiter');
const { verifyAccessToken } = require('../middleware');

// Apply rate limiter to sensitive routes
router.use(rateLimiter);

// Google OAuth2 routes
router.get('/auth/google', userController.googleAuth);
router.get('/auth/google/callback', userController.googleAuthCallback);
router.get('/profile', userController.getProfile);


// Other user-related routes

router.post('/auth/register', userController.register);
router.post('/auth/login', userController.login);
router.post('/auth/refresh-token', userController.refreshToken);
router.post('/auth/logout', userController.logout);
router.get('/auth/protected', verifyAccessToken, userController.protectedRoute);

module.exports = router;
