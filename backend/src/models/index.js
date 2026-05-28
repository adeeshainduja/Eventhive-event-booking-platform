const sequelize = require("../config/database");

const User = require("./User");
const Venue = require("./Venue");
const Event = require("./Event");
const Booking = require("./Booking");

// User → Venue
User.hasMany(Venue, {
  foreignKey: "ownerId",
  as: "ownedVenues"
});

Venue.belongsTo(User, {
  foreignKey: "ownerId",
  as: "owner"
});

// User → Event
User.hasMany(Event, {
  foreignKey: "organizerId",
  as: "organizedEvents"
});

Event.belongsTo(User, {
  foreignKey: "organizerId",
  as: "organizer"
});

// Venue → Event
Venue.hasMany(Event, {
  foreignKey: "venueId",
  as: "events"
});

Event.belongsTo(Venue, {
  foreignKey: "venueId",
  as: "venue"
});

// User → Booking
User.hasMany(Booking, {
  foreignKey: "userId",
  as: "bookings"
});

Booking.belongsTo(User, {
  foreignKey: "userId",
  as: "user"
});

// Event → Booking
Event.hasMany(Booking, {
  foreignKey: "eventId",
  as: "bookings"
});

Booking.belongsTo(Event, {
  foreignKey: "eventId",
  as: "event"
});

module.exports = {
  sequelize,
  User,
  Venue,
  Event,
  Booking
};