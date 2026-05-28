const { Booking, Event, Venue } = require("../models");

const createBooking = async (req, res) => {
  try {
    const { eventId, ticketQuantity } = req.body;

    if (!eventId || !ticketQuantity) {
      return res.status(400).json({
        success: false,
        message: "Event ID and ticket quantity are required"
      });
    }

    const event = await Event.findByPk(eventId);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    if (event.status !== "approved") {
      return res.status(400).json({
        success: false,
        message: "This event is not available for booking"
      });
    }

    if (Number(ticketQuantity) <= 0) {
      return res.status(400).json({
        success: false,
        message: "Ticket quantity must be greater than 0"
      });
    }

    if (event.availableTickets < Number(ticketQuantity)) {
      return res.status(400).json({
        success: false,
        message: "Not enough tickets available"
      });
    }

    const totalAmount = Number(event.ticketPrice) * Number(ticketQuantity);

    const booking = await Booking.create({
      userId: req.user.id,
      eventId,
      ticketQuantity,
      totalAmount,
      status: "confirmed"
    });

    event.availableTickets = event.availableTickets - Number(ticketQuantity);
    await event.save();

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const myBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: {
        userId: req.user.id
      },
      include: [
        {
          model: Event,
          as: "event",
          include: [
            {
              model: Venue,
              as: "venue"
            }
          ]
        }
      ],
      order: [["createdAt", "DESC"]]
    });

    res.json({
      success: true,
      count: bookings.length,
      bookings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [
        {
          model: Event,
          as: "event"
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    if (booking.userId !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "You cannot cancel this booking"
      });
    }

    if (booking.status === "cancelled") {
      return res.status(400).json({
        success: false,
        message: "Booking is already cancelled"
      });
    }

    booking.status = "cancelled";
    await booking.save();

    booking.event.availableTickets =
      booking.event.availableTickets + booking.ticketQuantity;

    await booking.event.save();

    res.json({
      success: true,
      message: "Booking cancelled successfully",
      booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createBooking,
  myBookings,
  cancelBooking
};