const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define(
    'Product',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        imageurl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        tableName: 'products',
        timestamps: false, // Disable automatic timestamp attributes
    }
);

module.exports = Product;
