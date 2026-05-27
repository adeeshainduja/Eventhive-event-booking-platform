require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/database");

require("./models");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL database connected successfully.");

    await sequelize.sync({ alter: true });
    console.log("Database tables synchronized.");

    app.listen(PORT, () => {
      console.log(`EventHive backend running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer();