const express = require("express");

const {
  dashboardStats,
  getPendingVenues,
  updateVenueStatus,
  getPendingEvents,
  updateEventStatus
} = require("../controllers/adminController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");


const router = express.Router();

router.use(protect);
router.use(authorizeRoles("admin"));

router.get("/venues/pending", getPendingVenues);
router.put("/venues/:id/status", updateVenueStatus);
router.get("/events/pending", getPendingEvents);
router.put("/events/:id/status", updateEventStatus);
router.get("/dashboard", dashboardStats);

module.exports = router;