const { Venue, User } = require("../models");

const createVenue = async (req, res) => {
  try {
    const { venueName, location, capacity, pricePerDay, description, image } = req.body;

    if (!venueName || !location || !capacity || !pricePerDay) {
      return res.status(400).json({
        success: false,
        message: "Venue name, location, capacity and price are required"
      });
    }

    const venue = await Venue.create({
      venueName,
      location,
      capacity,
      pricePerDay,
      description,
      image,
      ownerId: req.user.id,
      status: "pending"
    });

    res.status(201).json({
      success: true,
      message: "Venue created successfully. Waiting for admin approval.",
      venue
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getVenues = async (req, res) => {
  try {
    const venues = await Venue.findAll({
      where: {
        status: "approved"
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

const getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "owner",
          attributes: ["id", "fullName", "email"]
        }
      ]
    });

    if (!venue) {
      return res.status(404).json({
        success: false,
        message: "Venue not found"
      });
    }

    res.json({
      success: true,
      venue
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const myVenues = async (req, res) => {
  try {
    const venues = await Venue.findAll({
      where: {
        ownerId: req.user.id
      },
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

module.exports = {
  createVenue,
  getVenues,
  getVenueById,
  myVenues
};