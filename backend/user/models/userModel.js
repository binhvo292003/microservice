const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path as needed

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true, // Ensure that usernames are unique
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true, // Ensure that emails are unique
    validate: {
      isEmail: true, // Validate email format
    },
  },
  password: {
    type: DataTypes.STRING, // Store hashed passwords
    allowNull: false,
  },
}, {
  tableName: 'users', // Specify the table name
  timestamps: true,  // Enable timestamps
});

// Sync the model with the database (optional, usually done in a separate migration)
const syncDatabase = async () => {
  try {
    await User.sync();
    console.log('User model synced with the database.');
  } catch (error) {
    console.error('Error syncing User model:', error);
  }
};

// Uncomment to sync the database (use cautiously in production)
// syncDatabase();

module.exports = User;