const express = require('express');
const router = express.Router();

const Offer = require("../models/offerModul")


router.get("/", async (req, res) => {
    try {
      const offer = await Offer.find({});
      res.send(offer);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error });
    }
  });

  module.exports = router;