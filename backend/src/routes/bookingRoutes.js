const express = require("express");

const {
  createBooking,
  myBookings,
  cancelBooking
} = require("../controllers/bookingController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/my-bookings", protect, myBookings);
router.put("/:id/cancel", protect, cancelBooking);

module.exports = router;