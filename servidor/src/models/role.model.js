const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const Role = sequelize.define(
  "Role",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        notNull: { msg: "name is required" },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Role;