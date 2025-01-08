const express = require('express');
const router = express.Router();
const userController = require('../controllers');
const userLimiter = require('../middleware/rateLimiter'); // Adjust the path as needed

// Apply the rate limiter to user routes
router.use(userLimiter);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
