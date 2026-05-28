const express = require("express");

const {
  createPayment,
  myPayments,
  getAllPayments
} = require("../controllers/paymentController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", protect, createPayment);
router.get("/my-payments", protect, myPayments);

router.get(
  "/",
  protect,
  authorizeRoles("admin", "payment_manager"),
  getAllPayments
);

module.exports = router;