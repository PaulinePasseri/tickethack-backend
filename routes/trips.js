var express = require("express");
var router = express.Router();

const Trip = require("../models/trips");
const moment = require("moment")

router
  .post("/", (req, res) => {
    let formatDate = new Date(req.body.date)
    formatDate = moment(formatDate).format('YYYY-MM-DD')
    if ((!req.body.departure) || (!req.body.arrival)) {
      res.json({result: false})
    } else {
      Trip.find({
        departure: { $regex: new RegExp(req.body.departure, 'i') },
        arrival: { $regex: new RegExp(req.body.arrival, 'i') },
        date: {$gte:moment(formatDate).startOf('day'), $lte: moment(formatDate).endOf('day') }
      })
    .then(data => {
      res.json({trips :data, result: true})
    })
    }  
 })

module.exports = router;
