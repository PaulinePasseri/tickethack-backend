const express = require("express");
const router = express.Router();

const Trip = require("../models/trips");

router
  .get("/", (req, res) => {
    Trip.find({
      departure: req.body.departure,
      arrival: req.body.arrival,
      date: req.body.arrival,
    });
  })
  .then(data => {
    res.json({trips :data, result: true})
  })

module.exports = router;
