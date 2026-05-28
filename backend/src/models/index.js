const sequelize = require("../config/database");

const User = require("./User");
const Venue = require("./Venue");
const Event = require("./Event");

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

module.exports = {
  sequelize,
  User,
  Venue,
  Event
};