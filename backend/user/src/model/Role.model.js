const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Role extends Model {}

Role.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,
        modelName: 'Role',
        tableName: 'roles',
        timestamps: false,
    }
);

module.exports = Role;
