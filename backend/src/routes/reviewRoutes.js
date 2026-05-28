const express = require("express");

const {
  createReview,
  getEventReviews,
  deleteReview
} = require("../controllers/reviewController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createReview);
router.get("/event/:eventId", getEventReviews);
router.delete("/:id", protect, deleteReview);

module.exports = router;