const { Sequelize } = require('sequelize');

// Create a new Sequelize instance with database configuration
const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  port: 5432, // Default to 5432 if not specified
  dialect: 'postgres',
  logging: false,
});

// Test the database connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

module.exports = sequelize;

console.log(sequelize.model.toString);