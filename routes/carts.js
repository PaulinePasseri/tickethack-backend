var express = require('express');
var router = express.Router();

const Cart = require("../models/carts");

router.post('/', (req, res) => {
  const newCart = new Cart({
    isPaid: false,
    addToCart: true,
    trips: req.body.tripId,
  })
  newCart.save().then(data => {
    res.json({result: true, cart: data})
  })
});

router.get('/cart', (req, res) => {
  Cart.find({addToCart: true}).populate('trips').then(data => {
    console.log(data)
    if (data.length === 0) {
      res.json({result: false})
    } else {
      res.json({result: true, cart: data})
    }
  })
})

router.get('/book', (req, res) => {
  Cart.find({isPaid: true}).populate('trips').then(data => {
    if (data.length === 0) {
      res.json({result: false})
    } else {
      res.json({result: true, cart: data})
    }
  })
})

router.put('/buy', (req, res) => {
  Cart.updateMany({addToCart: true}, {isPaid: true})
  .then(data => {
    res.json({result: true})
  })
})

router.put('/cancel', (req, res) => {
  Cart.updateOne({trips: req.body.tripId}, {addToCart: false})
  .then(data => {
    res.json({result: true})
  })
})

router.delete('/', (req, res) => {
  Cart.deleteMany({addToCart: false}).then( data => {
    console.log(data)
  } )
})

module.exports = router;
