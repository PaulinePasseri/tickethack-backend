var express = require('express');
var router = express.Router();

const Cart = require("../models/carts");

router.post('/', (req, res) => {
  const newCart = new Cart({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: req.body.date,
    price: req.body.price,
  })
  newCart.save().then(data => {
    res.json({result: true, cart: data})
  })
});

module.exports = router;
