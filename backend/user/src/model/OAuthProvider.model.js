const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class OAuthProvider extends Model {}

OAuthProvider.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        provider: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        provider_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
    },
    {
        sequelize,
        modelName: 'OAuthProvider',
        tableName: 'oauth_providers',
        timestamps: false,
    }
);

module.exports = OAuthProvider;
