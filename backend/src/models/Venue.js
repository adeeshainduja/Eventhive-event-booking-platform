const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Venue = sequelize.define(
  "Venue",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    venueName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false
    },

    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    pricePerDay: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true
    },

    status: {
      type: DataTypes.ENUM("pending", "approved", "rejected"),
      defaultValue: "pending"
    }
  },
  {
    tableName: "venues",
    timestamps: true
  }
);

module.exports = Venue;