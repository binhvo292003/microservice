const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: 'postgres',
    username: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    ssl: true,
    clientMinMessages: 'notice',
});


class Session extends Model {}

Session.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
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
        refresh_token: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        expires_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Session',
        tableName: 'sessions',
        timestamps: false,
    }
);
