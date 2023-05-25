const express = require("express");
const router = express.Router();
require("dotenv").config();
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

router.post("/", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  //Prüfen ob Email vorhanden
  const user = await User.findOne({ email: email });
  console.log(user);
  if (user === null) {
    return res.send({ message: "User does not exist!" });
  }
  //6 stelligen Code erzeugen
  const code = Math.floor(100000 + Math.random() * 900000);
  console.log(code);

  //Email senden
  const transponder = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    form: process.env.EMAIL,
    to: email,
    subject: "Reset password Cat-Net-App",
    text: `Your reset code is ${code}`,
  };
  transponder.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.send({ message: "Problems to send email" });
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  //Token setzen
  const token = jwt.sign({ email: email }, process.env.JWT_Secret);
  return res.send({
    message: "Email sent",
    toastify: `Email sent to ${email}`,
    token: token,
    code,
  });
});

module.exports = router;