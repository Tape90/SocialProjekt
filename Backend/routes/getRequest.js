const express = require('express');
const router = express.Router();

const Request = require("../models/requestModul")


router.get("/", async (req, res) => {
    const request = await Request.find({});
    res.send(request);
  });

  module.exports = router;
  