const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
  title: String,
  time: String,
  price: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FlightModel", FlightSchema)
