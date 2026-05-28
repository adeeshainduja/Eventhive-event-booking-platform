const { Event, Venue, User } = require("../models");

const createEvent = async (req, res) => {
  try {
    const {
      eventTitle,
      category,
      eventDate,
      eventTime,
      ticketPrice,
      totalTickets,
      description,
      image,
      venueId
    } = req.body;

    if (
      !eventTitle ||
      !category ||
      !eventDate ||
      !eventTime ||
      !ticketPrice ||
      !totalTickets ||
      !venueId
    ) {
      return res.status(400).json({
        success: false,
        message: "Required event details are missing"
      });
    }

    const venue = await Venue.findByPk(venueId);

    if (!venue) {
      return res.status(404).json({
        success: false,
        message: "Venue not found"
      });
    }

    if (venue.status !== "approved") {
      return res.status(400).json({
        success: false,
        message: "Cannot create event for unapproved venue"
      });
    }

    const event = await Event.create({
      eventTitle,
      category,
      eventDate,
      eventTime,
      ticketPrice,
      totalTickets,
      availableTickets: totalTickets,
      description,
      image,
      venueId,
      organizerId: req.user.id,
      status: "pending"
    });

    res.status(201).json({
      success: true,
      message: "Event created successfully. Waiting for admin approval.",
      event
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.findAll({
      where: {
        status: "approved"
      },
      include: [
        {
          model: Venue,
          as: "venue"
        },
        {
          model: User,
          as: "organizer",
          attributes: ["id", "fullName", "email"]
        }
      ],
      order: [["createdAt", "DESC"]]
    });

    res.json({
      success: true,
      count: events.length,
      events
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id, {
      include: [
        {
          model: Venue,
          as: "venue"
        },
        {
          model: User,
          as: "organizer",
          attributes: ["id", "fullName", "email"]
        }
      ]
    });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    res.json({
      success: true,
      event
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const myEvents = async (req, res) => {
  try {
    const events = await Event.findAll({
      where: {
        organizerId: req.user.id
      },
      include: [
        {
          model: Venue,
          as: "venue"
        }
      ],
      order: [["createdAt", "DESC"]]
    });

    res.json({
      success: true,
      count: events.length,
      events
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  myEvents
};