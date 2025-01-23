const passport = require('passport');
const UserModel = require('../model/User.model');

// Mock database for demonstration
const users = [];

// Google OAuth authentication
exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleAuthCallback = passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: '/api/profile',
});

// Fetch user profile after authentication
exports.getProfile = (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    res.json({ user: req.user });
};

// Get all users
exports.getAllUsers = (req, res) => {
    res.json(users);
};
