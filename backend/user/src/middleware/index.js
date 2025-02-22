const jwt = require('jsonwebtoken');
const { User, Role } = require('../model');

exports.verifyAccessToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '');
        req.user = decoded;

        const user = await User.findByPk(decoded.id, {
            include: { model: Role },
        });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user.role = user.Role.name;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

// Role-based authorization middleware
exports.authorizeRole = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden: Insufficient privileges' });
        }
        next();
    };
};
