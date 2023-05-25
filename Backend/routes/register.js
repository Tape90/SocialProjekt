const express = require('express');
require("dotenv").config();
const router = express.Router();
const bcrypt = require("bcrypt");
const expressLimit = require("express-rate-limit");

const User = require("../models/userModel");

const limiter = expressLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    message: "Too many requests form this IP, try again later",
  });

router.post("/", limiter, async (req, res) => {
    const { email, password, id, nickname } = req.body;
  
    //User bereits vorhanden?
  
    const storagedUser = await User.findOne({ email });
  
    if (storagedUser) {
      console.log("User already exists!");
      //Status 409 = existiert schon
      return res.status(409).send({ message: "User already exists!" });
    } else {
      //mit bcrypt Passwort verschlüsseln
      const salt = await bcrypt.genSalt(10);
      const hashedPassord = await bcrypt.hash(password, salt);
      //neuen User erstellen
      const user = new User({ email, id, nickname, password: hashedPassord });
      //neuen User hochladen
      try {
        await User.create(user);
        res.status(201).send({ message: "User created" }); // 201 = neue Resource vom Server erstellt
      } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Server error" }); // 500 = internal Server error
      }
    }
  });

  module.exports = router;