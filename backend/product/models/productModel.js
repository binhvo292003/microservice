const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path as needed

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER, // Using INTEGER for the id field
    autoIncrement: true, // Auto-incrementing
    primaryKey: true, // Primary key
  },
  name: {
    type: DataTypes.STRING(255), // VARCHAR(255)
    allowNull: false, // NOT NULL constraint
  },
  price: {
    type: DataTypes.FLOAT, // FLOAT
    allowNull: false, // NOT NULL constraint
  },
  description: {
    type: DataTypes.TEXT, // TEXT
    allowNull: true, // Nullable
  },
}, {
  timestamps: true, // Able automatic timestamps
  tableName: 'products', // Specify the table name
});

// Sync the model with the database
const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');
    
    await Product.sync(); // Sync the Product model
  } catch (error) {
    console.error('Database error:', error); // Log database connection errors
  }
};


syncDatabase();

module.exports = Product;