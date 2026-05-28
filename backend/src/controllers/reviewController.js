const { Review, Event, User } = require("../models");

const createReview = async (req, res) => {
  try {
    const { eventId, rating, comment } = req.body;

    if (!eventId || !rating) {
      return res.status(400).json({
        success: false,
        message: "Event ID and rating are required"
      });
    }

    if (Number(rating) < 1 || Number(rating) > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5"
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
        message: "You can review only approved events"
      });
    }

    const existingReview = await Review.findOne({
      where: {
        userId: req.user.id,
        eventId
      }
    });

    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: "You already reviewed this event"
      });
    }

    const review = await Review.create({
      userId: req.user.id,
      eventId,
      rating,
      comment
    });

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      review
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getEventReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: {
        eventId: req.params.eventId
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "fullName", "email"]
        }
      ],
      order: [["createdAt", "DESC"]]
    });

    const averageRating =
      reviews.length === 0
        ? 0
        : reviews.reduce((sum, review) => sum + Number(review.rating), 0) /
          reviews.length;

    res.json({
      success: true,
      count: reviews.length,
      averageRating: Number(averageRating.toFixed(1)),
      reviews
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found"
      });
    }

    if (review.userId !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "You cannot delete this review"
      });
    }

    await review.destroy();

    res.json({
      success: true,
      message: "Review deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createReview,
  getEventReviews,
  deleteReview
};