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
        avatar_url:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        create_at:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        delete_at:{
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        timestamps: false,
        tableName: 'users',
    }
);

sequelize.sync({force:true});

console.log('The table for the User model was just (re)created!');


module.exports = {
    sequelize,
    User,
};
