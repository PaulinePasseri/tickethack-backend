var express = require("express");
var router = express.Router();

const Trip = require("../models/trips");
const moment = require("moment")

router
  .post("/", (req, res) => {
    //pattern = /[0-9]*-[0-9]*-[0-9]*/
    let formatDate = new Date(req.body.date)
    
  //  console.log(formatDate)
 
    formatDate = moment(formatDate).format('YYYY-MM-DD')
    
    
    Trip.find({
      departure: req.body.departure,
      arrival: req.body.arrival,
      date: {$gte:moment(formatDate).startOf('day'), $lte: moment(formatDate).endOf('day') }
    })
  .then(data => {
    res.json({trips :data, result: true})
  })
 })
module.exports = router;
