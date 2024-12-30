const express = require('express');
const {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const router = express.Router();

// Route to create a new user
router.post('/users', createUser);

// Route to get a single user by ID
router.get('/users/:id', getUser);

// Route to get all users
router.get('/users', getAllUsers);

// Route to update a user by ID
router.put('/users/:id', updateUser);

// Route to delete a user by ID
router.delete('/users/:id', deleteUser);

module.exports = router;