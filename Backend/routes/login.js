const express = require('express');
require("dotenv").config();
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");


router.post("/", async (req, res) => {
    // res.send("Success")
  
    const { email, password } = req.body;
    // User bereits vorhanden?
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.send({ message: "User does not exist" });
    }
  
    // Passwort richtig?
    const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
    if (!isPasswordCorrect) {
      return res.send({ message: "Password is not correct" });
    }
  
    // Erstelle JWT token
    const token = jwt.sign(
      {
        id: existUser._id,
      },
      process.env.JWT_Secret
    );
    res.send({ token, message: "Login successful" });
  });

  module.exports = router;