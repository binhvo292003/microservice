const { User } = require('../model');

const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

const getUserById = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

const createUser = async (req, res) => {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.update(req.body);
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

const deleteUser = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.destroy();
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
