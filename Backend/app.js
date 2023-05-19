require('dotenv').config();
const express = require ("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const expressLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.Port;

const limiter = expressLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: "Too many requests form this IP, try again later"
});

app.use('/uploads', express.static('uploads'));
app.use(cors());

const database = "Jens-Kat-Net";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

app.use(async function (req, res, next) {
    await mongoose.connect(`${process.env.Connection}${database}?retryWrites=true&w=majority`)
    next();
});

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    nickname: String,
    email: String,
    phone: String,
    password: String,
    job: String,
    region: String,
    skills: String,
    equipment: String,
    radius: Number,
    available: String,
    id: String
});

const User = mongoose.model('user', userSchema);


const seekorfindSchema = new mongoose.Schema({
    id: String,
    type: String,
    catastrophe: String,
    title: String,
    region: String,
    period: String,
    contact: String,
    description: String,
    imageUrl: String,
    commentar: Array
});

const Offer = mongoose.model('offer', seekorfindSchema)

const Request = mongoose.model('request', seekorfindSchema)


app.get('/', (req, res) => {
    res.send('Hello')
});


app.post("/api/postrequest", upload.single("image"), async (req, res) => {
    console.log(req);
    const { id, type, catastrophe, title, region, period, contact, description } = req.body;
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    const post = new Request({id, type, catastrophe, title, region, period, contact, description, imageUrl });
    try {
      await Request.create(post);
      res.sendStatus(201);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
});

app.post("/api/postoffer", upload.single("image"), async (req, res) => {
  console.log(req);
  const { id, type, catastrophe, title, region, period, contact, description } = req.body;
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  const post = new Offer({id, type, catastrophe, title, region, period, contact, description, imageUrl });
  try {
    await Offer.create(post);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});


app.get('/api/getoffer', async(req, res) => {
  try {
  const offer = await Offer.find({});
  res.send(offer);
  }catch (error){
    console.log(error);
    res.status(500).send({message: error})
  }
});

app.get('/api/getrequest', async(req, res) => {
const request = await Request.find({});
res.send(request);
});

// Ab hier app.use JSON!!
app.use(express.json());

// app.get('/api/register', async(req, res) => {
//     const users = await User.find({});
//     res.send(users);
// });

app.post('/api/register', limiter,  async(req, res) => {
    const { email, password, id, nickname } = req.body;
     
    //User bereits vorhanden?

    const storagedUser = await User.findOne({email});

    if (storagedUser) {
      console.log("User already exists!");
      //Status 409 = existiert schon
      return res.status(409).send({message: "User already exists!"});
    } else {
      //mit bcrypt Passwort verschlüsseln
      const salt = await bcrypt.genSalt(10);
      const hashedPassord = await bcrypt.hash(password, salt);
      //neuen User erstellen
      const user = new User({email, id, nickname, password: hashedPassord});
      //neuen User hochladen
      try {
        await User.create(user);
        res.status(201).send({message: "User created"}) // 201 = neue Resource vom Server erstellt
      } catch (error) {
        console.log(error)
        res.status(500).send({message: "Server error"}) // 500 = internal Server error
      }

    }
});

app.post('/api/login', async (req, res) => {

 // res.send("Success")

  const {email, password} = req.body;
  // User bereits vorhanden?
  const existUser = await User.findOne({email});
  if (!existUser) {
    return res.send({message: "User does not exist"});
  }

  // Passwort richtig?
  const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
  if (!isPasswordCorrect){
    return res.send({message: "Password is not correct"});
  }

  // Erstelle JWT token
  const token = jwt.sign({
    id: existUser._id}, 
    process.env.JWT_Secret);
    res.send({token, message: "Login successful"});
})

app.put('/api/commentar', async(req, res) => {
  const {commentar, id, type} = req.body;
  let nickname;
  //Token validieren
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_Secret)
  const userId = decodedToken.id;

  res.send(userId);

  //Nickname aus Datenbank abrufen
  try{
  const user = await User.findOne({_id: userId});
  console.log(user)
  nickname = user.nickname;
  console.log(nickname)
 
  } catch (error) {
    res.send(`Error bei Nickname: ${error}`)
  }

    //Neuen array für eintrag erstellen
    const newComment = [commentar, nickname]
    console.log(newComment);

    if (type === "Request") {
      const eintrag = await Request.findOneAndUpdate({id: id}, {$push: {commentar: newComment}});
      console.log(eintrag);
    } else {
      const eintrag = await Offer.findOneAndUpdate({id: id}, {$push: {commentar: newComment}});
      console.log(eintrag);
    }

})

//Passwort zurücksetzten

app.post('/api/forgot', async (req, res) => {
  const {email} = req.body;
  console.log(email);
  //Prüfen ob Email vorhanden
  const user = await User.findOne({email: email});
  console.log(user);
  if (user === null) {
    return res.send({message: "User does not exist!"})
  }
  //6 stelligen Code erzeugen
  const code = Math.floor(100000 + Math.random() * 900000);
  console.log(code);

  //Email senden
  const transponder = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  const mailOptions = {
    form: process.env.EMAIL,
    to: email,
    subject: "Reset password Cat-Net-App",
    text: `Your reset code is ${code}`
  };
  transponder.sendMail(mailOptions, (error, info) => {
    if (error){
      console.log(error);
      return res.send({message: "Problems to send email"})
    } else {
      console.log("Email sent: " + info.response);
    }
  })

  //Token setzen
  const token = jwt.sign({email: email}, process.env.JWT_Secret);
  return res.send({message: "Email sent", toastify: `Email sent to ${email}`, token: token, code});

})

app.post("/api/reset", async (req, res) => {
  //console.log(req.body)
  const {password} = req.body;
  const token = req.headers.authorization.split(" ")[1];
  //console.log(password)
  //console.log(token)
  //Prüfen ob Daten da
  if (!password || !token) {
    return res.send({message: "Input wrong"})
  }
  //Token entschlüsseln
  const decodedToken = jwt.verify(token, process.env.JWT_Secret);

  //User vorhanden?
  const user = await User.findOne({email: decodedToken.email});
  if (user === null) {
    console.log("User nicht gefunden " + decodedToken);
  }

  //Passwort hashen
  const hashedPassword = await bcrypt.hash(password, 10);

  //Update User Passwort
  await User.findOneAndUpdate({email: decodedToken.email}, {password: hashedPassword});
  res.send({message: "okay"})
  console.log("Password updated")
})


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});

//dhwtofknvykftmso / laksdfjeilakjföl/ alöksdjfeiöafh