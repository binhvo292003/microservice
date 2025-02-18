const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, Role, Session } = require('../model');

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

const generateRefreshToken = async (user) => {
    const refreshToken = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: REFRESH_TOKEN_EXPIRES_IN,
    });

    await Session.create({
        user_id: user.id,
        refresh_token: refreshToken,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return refreshToken;
};

// Register
exports.register = async (req, res) => {
    const { email, password, full_name } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const customerRole = await Role.findOne({ where: { name: 'Customer' } });

        const newUser = await User.create({
            email,
            full_name,
            password_hash: hashedPassword,
            customerRole,
        });

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !bcrypt.compareSync(password, user.password_hash))
            return res.status(401).json({ message: 'Invalid credentials' });

        const accessToken = generateAccessToken(user);
        const refreshToken = await generateRefreshToken(user);

        res.json({ accessToken, refreshToken });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Token Refresh
exports.refreshToken = async (req, res) => {
    const { token } = req.body;

    try {
        const session = await Session.findOne({ where: { refresh_token: token } });
        if (!session) return res.status(403).json({ message: 'Invalid refresh token' });

        const user = await User.findByPk(session.user_id);
        const newAccessToken = generateAccessToken(user);
        res.json({ accessToken: newAccessToken });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Logout
exports.logout = async (req, res) => {
    const { token } = req.body;

    try {
        await Session.destroy({ where: { refresh_token: token } });
        res.json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Protected Route
exports.protectedRoute = (req, res) => {
    res.json({ message: `Hello, user with ID ${req.user.id}` });
};

// Google OAuth authentication
exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleAuthCallback = async (req, res, next) => {
    passport.authenticate('google', async (err, googleUser, info) => {
        if (err) return res.status(500).json({ message: 'Google authentication failed' });

        if (!googleUser) return res.status(401).json({ message: 'Authentication failed' });

        try {
            // Check if user exists in the database
            let user = await User.findOne({ where: { email: googleUser.emails[0].value } });

            if (!user) {
                const customerRole = await Role.findOne({ where: { name: 'Customer' } });

                // Create new user if first-time login
                user = await User.create({
                    email: googleUser.emails[0].value,
                    full_name: googleUser.displayName,
                    profile_picture: googleUser.photos[0].value,
                    role_id: customerRole, // Assign role if needed
                });
            }

            // Generate tokens
            const accessToken = generateAccessToken(user);
            const refreshToken = await generateRefreshToken(user);

            // Redirect to frontend with tokens
            res.json({ message: 'Google login successful', accessToken, refreshToken });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })(req, res, next);
};

// Fetch user profile after authentication
exports.getProfile = (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    res.json({ user: req.user });
};
