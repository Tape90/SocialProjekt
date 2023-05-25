const express = require('express');
require("dotenv").config();
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/userModel");

router.post("/", async (req, res) => {
    //console.log(req.body)
    const { password } = req.body;
    const token = req.headers.authorization.split(" ")[1];
    //console.log(password)
    //console.log(token)
    //Prüfen ob Daten da
    if (!password || !token) {
      return res.send({ message: "Input wrong" });
    }
    //Token entschlüsseln
    const decodedToken = jwt.verify(token, process.env.JWT_Secret);
  
    //User vorhanden?
    const user = await User.findOne({ email: decodedToken.email });
    if (user === null) {
      console.log("User nicht gefunden " + decodedToken);
    }
  
    //Passwort hashen
    const hashedPassword = await bcrypt.hash(password, 10);
  
    //Update User Passwort
    await User.findOneAndUpdate(
      { email: decodedToken.email },
      { password: hashedPassword }
    );
    res.send({ message: "okay" });
    console.log("Password updated");
  });

  module.exports = router;