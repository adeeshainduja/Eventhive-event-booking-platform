const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Event = sequelize.define(
  "Event",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    eventTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false
    },

    eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },

    eventTime: {
      type: DataTypes.TIME,
      allowNull: false
    },

    ticketPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    totalTickets: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    availableTickets: {
      type: DataTypes.INTEGER,
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
    tableName: "events",
    timestamps: true
  }
);

module.exports = Event;