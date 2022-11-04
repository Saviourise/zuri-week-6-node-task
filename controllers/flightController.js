const FlightModel = require("../models/Flight");

// get all flights
exports.getAllFlight = async (req, res) => {
  await FlightModel.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({ error: true, message: err.message });
    }
    res.status(200).json(data);
  });
};

// get single flight
exports.getSingleFlight = async (req, res) => {
  await FlightModel.findById(req.params.id, (err, data) => {
    if (err) {
      return res.status(400).json({ error: true, message: err.message });
    }
    res.status(200).json(data);
  });
};

// book/add flight
exports.bookFlight = async (req, res) => {
  const { title, time, price } = req.body;

  if (!title || !time || !price)
    return res
      .status(400)
      .json({ error: true, message: "Please fill all inputs!" });

  const addBooking = new FlightModel(req.body);

  try {
    await addBooking.save();
    res.status(200).json({ message: "Flight booked!" });
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};

// update/edit flight
exports.editFlight = async (req, res) => {
  await FlightModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => {
      if (err) {
        return res.status(400).json({ error: true, message: err.message });
      }
      res.status(200).json({ message: "Flight updated!" });
    }
  );
};

// delete flight
exports.deleteFlight = async (req, res) => {
  await FlightModel.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      return res.status(400).json({ error: true, message: err.message });
    }
    res.status(200).json({ message: "Flight deleted!" });
  });
};
