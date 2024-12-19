const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
});

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: 'Users',
    }
);

sequelize.sync();

module.exports = {
    sequelize,
    User,
};
