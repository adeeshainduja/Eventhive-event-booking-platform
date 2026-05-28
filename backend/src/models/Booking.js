const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Booking = sequelize.define(
  "Booking",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    ticketQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    status: {
      type: DataTypes.ENUM("pending", "confirmed", "cancelled"),
      defaultValue: "confirmed"
    }
  },
  {
    tableName: "bookings",
    timestamps: true
  }
);

module.exports = Booking;