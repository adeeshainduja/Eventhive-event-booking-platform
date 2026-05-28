const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Payment = sequelize.define(
  "Payment",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    method: {
      type: DataTypes.ENUM("card", "bank_transfer", "cash"),
      defaultValue: "card"
    },

    status: {
      type: DataTypes.ENUM("pending", "paid", "failed", "refunded"),
      defaultValue: "paid"
    },

    transactionId: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: "payments",
    timestamps: true
  }
);

module.exports = Payment;