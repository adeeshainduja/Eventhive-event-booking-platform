const express = require("express");

const {
  createEvent,
  getEvents,
  getEventById,
  myEvents
} = require("../controllers/eventController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", getEvents);
router.get("/my-events", protect, authorizeRoles("organizer", "admin"), myEvents);
router.get("/:id", getEventById);

router.post(
  "/",
  protect,
  authorizeRoles("organizer", "admin"),
  createEvent
);

module.exports = router;