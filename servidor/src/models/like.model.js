const { DataTypes } = require('sequelize');
const sequelize = require("../db/db");

const Like = sequelize.define(
    "Like",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        post_id: {
            type: DataTypes.UUID,
        },
        user_id: {
            type: DataTypes.UUID,
        }
    },
    {
        timestamps: true
    }
);

module.exports = Like;
