const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const UserModel = require('../model/User.model');

// Get init variables
const users = [];

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || '10', 10);
const JWT_SECRET = process.env.JWT_SECRET || '';
const ACCESS_TOKEN_EXPIRES_IN = '15m';
const REFRESH_TOKEN_EXPIRES_IN = '7d';
let refreshTokens = [];

// Generate token
const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    });
};

const generateRefreshToken = (user) => {
    const refreshToken = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: REFRESH_TOKEN_EXPIRES_IN,
    });
    refreshTokens.push(refreshToken); // Store refresh token
    return refreshToken;
};

// Register
exports.register = (req, res) => {
    const { email, password } = req.body;
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS);
    const newUser = { id: Date.now(), email, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
};

// Login
exports.login = (req, res) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.json({ accessToken, refreshToken });
};

// Token Refresh
exports.refreshToken = (req, res) => {
    const { token } = req.body;

    if (!token || !refreshTokens.includes(token)) {
        return res.status(403).json({ message: 'Refresh token invalid' });
    }

    try {
        const user = jwt.verify(token, JWT_SECRET);
        const newAccessToken = generateAccessToken(user);
        res.json({ accessToken: newAccessToken });
    } catch (error) {
        return res.status(403).json({ message: 'Token expired or invalid' });
    }
};

// Logout
exports.logout = (req, res) => {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter((t) => t !== token); // Invalidate the refresh token
    res.json({ message: 'Logged out successfully' });
};

// Protected Route
exports.protectedRoute = (req, res) => {
    res.json({ message: `Hello, user with ID ${req.user.id}` });
};

// Google OAuth authentication
exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleAuthCallback = passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: 'http://localhost:3000',
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
