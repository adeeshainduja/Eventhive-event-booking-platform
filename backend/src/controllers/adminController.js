const { Venue, Event, User } = require("../models");

const getPendingVenues = async (req, res) => {
  try {
    const venues = await Venue.findAll({
      where: {
        status: "pending"
      },
      include: [
        {
          model: User,
          as: "owner",
          attributes: ["id", "fullName", "email"]
        }
      ],
      order: [["createdAt", "DESC"]]
    });

    res.json({
      success: true,
      count: venues.length,
      venues
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const updateVenueStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be approved or rejected"
      });
    }

    const venue = await Venue.findByPk(req.params.id);

    if (!venue) {
      return res.status(404).json({
        success: false,
        message: "Venue not found"
      });
    }

    venue.status = status;
    await venue.save();

    res.json({
      success: true,
      message: `Venue ${status} successfully`,
      venue
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getPendingEvents = async (req, res) => {
  try {
    const events = await Event.findAll({
      where: {
        status: "pending"
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

const updateEventStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be approved or rejected"
      });
    }

    const event = await Event.findByPk(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    event.status = status;
    await event.save();

    res.json({
      success: true,
      message: `Event ${status} successfully`,
      event
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getPendingVenues,
  updateVenueStatus,
  getPendingEvents,
  updateEventStatus
};