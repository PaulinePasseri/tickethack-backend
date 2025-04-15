var express = require('express');
var router = express.Router();

const Cart = require("../models/carts");

router.post('/', (req, res) => {
  const newCart = new Cart({
    isPaid: false,
    addToCart: true,
    trips: req.body.id,
  })
  newCart.save().then(data => {
    res.json({result: true, cart: data})
  })
});

router.get('/', (req, res) => {
  Cart.find().then(data => {
    if (data.length === 0) {
      res.json({result: false})
    } else {
      res.json({result: true, cart: data})
    }
  })
})

router.delete('/', (req, res) => {
  Cart.deleteOne().then( data => {

  } )
})

module.exports = router;
