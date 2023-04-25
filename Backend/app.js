require('dotenv').config();
const express = require ("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.Port;

app.use(cors());
app.use(express.json());

const database = "Jens-Kat-Net";

app.use(async function (req, res, next) {
    await mongoose.connect(`${process.env.Connection}${database}?retryWrites=true&w=majority`)
    next();
});

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    passwort: String,
    job: String,
    region: String,
    skills: String,
    equipment: String,
    radius: Number,
    available: String
});

const User = mongoose.model('user', userSchema);


const seekorfindSchema = new mongoose.Schema({
    type: String,
    titel: String,
    location: String,
    period: String,
    catastrophe: String,
    contact: String,
    description: String
});

const Offer = mongoose.model('seekOrFind', seekorfindSchema)


app.get('/', (req, res) => {
    res.send('Hello')
});

app.get('/getuser', async(req, res) => {
    const users = await User.find({});
    res.send(users);
});

app.post('/postuser', async(req, res) => {
    // const user = req.body oder req.query / Hier Daten entgegen nehmen
    await User.create(user);
    res.status(200).send("Datenbank akt.");
});

app.get('/getoffer', async(req, res) => {
    const offer = await Offer.find({});
    res.send(offer);
});

app.post('/postoffer', async(req, res) => {
    //const offer = Hier Daten entgegen nehmen
    await Offer.create(offer);
    res.status(200).send("Datenbank akt.");
});

//app.delelte zum Löschen

//app.put zum Aktualisieren

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});