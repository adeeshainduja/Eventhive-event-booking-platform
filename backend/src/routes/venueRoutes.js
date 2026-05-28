const express = require("express");

const {
  createVenue,
  getVenues,
  getVenueById,
  myVenues
} = require("../controllers/venueController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/", getVenues);
router.get("/my-venues", protect, authorizeRoles("venue_owner", "admin"), myVenues);
router.get("/:id", getVenueById);

router.post(
  "/",
  protect,
  authorizeRoles("venue_owner", "admin"),
  createVenue
);

module.exports = router;