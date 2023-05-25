const mongoose = require("mongoose");

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
    id: String,
  });
  
  const User = mongoose.model("user", userSchema);

  module.exports = User;