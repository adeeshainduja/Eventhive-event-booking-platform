const { Payment, Booking, Event } = require("../models");

const createPayment = async (req, res) => {
  try {
    const { bookingId, method, transactionId } = req.body;

    if (!bookingId || !method) {
      return res.status(400).json({
        success: false,
        message: "Booking ID and payment method are required"
      });
    }

    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    if (booking.userId !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "You cannot pay for this booking"
      });
    }

    if (booking.status === "cancelled") {
      return res.status(400).json({
        success: false,
        message: "Cannot pay for cancelled booking"
      });
    }

    const existingPayment = await Payment.findOne({
      where: {
        bookingId
      }
    });

    if (existingPayment) {
      return res.status(400).json({
        success: false,
        message: "Payment already exists for this booking"
      });
    }

    const payment = await Payment.create({
      bookingId,
      amount: booking.totalAmount,
      method,
      transactionId,
      status: "paid"
    });

    res.status(201).json({
      success: true,
      message: "Payment created successfully",
      payment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const myPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll({
      include: [
        {
          model: Booking,
          as: "booking",
          where: {
            userId: req.user.id
          },
          include: [
            {
              model: Event,
              as: "event"
            }
          ]
        }
      ],
      order: [["createdAt", "DESC"]]
    });

    res.json({
      success: true,
      count: payments.length,
      payments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll({
      include: [
        {
          model: Booking,
          as: "booking",
          include: [
            {
              model: Event,
              as: "event"
            }
          ]
        }
      ],
      order: [["createdAt", "DESC"]]
    });

    res.json({
      success: true,
      count: payments.length,
      payments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createPayment,
  myPayments,
  getAllPayments
};