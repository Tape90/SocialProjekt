const express = require('express');
const router = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");

const Request = require("../models/requestModul");
const Offer = require("../models/offerModul");
const User = require("../models/userModel");

router.put("/", async (req, res) => {
    const { commentar, id, type } = req.body;
    let nickname;
    //Token validieren
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_Secret);
    const userId = decodedToken.id;
  
    res.send(userId);
  
    //Nickname aus Datenbank abrufen
    try {
      const user = await User.findOne({ _id: userId });
      console.log(user);
      nickname = user.nickname;
      console.log(nickname);
    } catch (error) {
      res.send(`Error bei Nickname: ${error}`);
    }
  
    //Neuen array für eintrag erstellen
    const newComment = [commentar, nickname];
    console.log(newComment);
  
    if (type === "Request") {
      const eintrag = await Request.findOneAndUpdate(
        { id: id },
        { $push: { commentar: newComment } }
      );
      console.log(eintrag);
    } else {
      const eintrag = await Offer.findOneAndUpdate(
        { id: id },
        { $push: { commentar: newComment } }
      );
      console.log(eintrag);
    }
  });

  module.exports = router;