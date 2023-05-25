const express = require('express');
const multer = require('multer');
const router = express.Router();

const Offer = require("../models/offerModul")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  console.log(req);
  const { id, type, catastrophe, title, region, period, contact, description } =
    req.body;
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  const post = new Offer({
    id,
    type,
    catastrophe,
    title,
    region,
    period,
    contact,
    description,
    imageUrl,
  });
  try {
    await Offer.create(post);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;