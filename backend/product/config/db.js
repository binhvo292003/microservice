const { Sequelize } = require('sequelize');

// Create a new Sequelize instance with database configuration
const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  port: 5432, // Default to 5432 if not specified
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;

console.log(sequelize.model.toString);