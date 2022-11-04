const express = require("express");

const router = express.Router();
const controller = require("../controllers/flightController");

// get all flights
router.get("/", controller.getAllFlight);

// get single flight
router.get("/:id", controller.getSingleFlight);

// edit/update flight
router.post("/edit/:id", controller.editFlight);

// delete flight
router.post("/delete/:id", controller.deleteFlight);

// book/add flight
router.post("/add", controller.bookFlight);

module.exports = router;
