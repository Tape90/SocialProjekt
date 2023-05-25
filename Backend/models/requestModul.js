const mongoose = require("mongoose");

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
    commentar: Array,
  });

  const Request = mongoose.model("request", seekorfindSchema);

  module.exports = Request;