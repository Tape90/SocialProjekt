require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const postRequestRouter = require("./routes/postRequest")
const postOfferRouter = require("./routes/postOffer")
const getRequestRouter = require("./routes/getRequest")
const getOfferRouter = require("./routes/getOffer")
const commentarRouter = require("./routes/postCommentar")
const loginRouter = require("./routes/login")
const registerRouter = require("./routes/register")
const googleRouter = require("./routes/google")
const forgotPWRouter = require("./routes/forgotPW")
const resetRouter = require("./routes/reset")

const app = express();
const port = process.env.Port;

app.use("/uploads", express.static("uploads"));
app.use(cors());

const database = "Jens-Kat-Net";

app.use(async function (req, res, next) {
  await mongoose.connect(
    `${process.env.Connection}${database}?retryWrites=true&w=majority`
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/postrequest", postRequestRouter);

app.use("/api/postoffer", postOfferRouter);

app.use("/api/getoffer", getOfferRouter);

app.use("/api/getrequest", getRequestRouter);

// Ab hier app.use JSON!!
app.use(express.json());

app.use("/api/register", registerRouter);

app.use("/api/login", loginRouter);

app.use("/api/google", googleRouter);

app.use("/api/commentar", commentarRouter);

//Passwort zurücksetzten

app.use("/api/forgot", forgotPWRouter);

app.use("/api/reset", resetRouter);

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});

