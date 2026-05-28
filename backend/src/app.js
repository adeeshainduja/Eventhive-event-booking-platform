const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "EventHive Backend API is running..."
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    service: "EventHive API",
    timestamp: new Date()
  });
});

app.use("/api/auth", authRoutes);

module.exports = app;