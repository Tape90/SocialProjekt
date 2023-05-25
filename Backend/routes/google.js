const express = require('express');
require("dotenv").config();
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");


router.post("/", async (req, res) => {
    const tokenGoogle = req.headers.authorization.split(" ")[1];
    console.log(tokenGoogle);
    const decodedToken = jwt.decode(tokenGoogle, process.env.GOOGLE_SECRET);
    console.log(decodedToken)
    const email = decodedToken.email;
    const nickname = decodedToken.given_name;
  
    // Prüfen ob User schon existiert und einloggen
    const existUser = await User.findOne({ email });
    console.log(existUser);
    if (existUser != null) {
      // User gefunden, da Google muss Passwort richtig sein
      // Erstelle JWT token
      console.log("User gefunden")
      const token = jwt.sign(
        {
          id: existUser._id,
        },
        process.env.JWT_Secret
      );
      res.send({ token, message: "Login successful" });
    } else {
      // User nicht gefunden also neu anlegen
      const { id } = req.body;
      const user = new User({ email, id, nickname });
      //neuen User hochladen
      try {
        const newUser = await User.create(user);
        console.log(newUser)
        //User einloggen
        const token = jwt.sign(
          {
            id: newUser._id,
          },
          process.env.JWT_Secret
        );
        res.send({ token, message: "User created" });
      } catch (error) {
        console.log(error);
      }
    }
  }); 

  module.exports = router;