const mongoose = require("mongoose");

const OurEventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    description: { type: String, required: true, minlength: 10 },
    location: { type: String, required: true },
    organizer: { type: String, required: true },
    imageUrl: { type: String, required: false }, // Store image path
  }
);

module.exports = mongoose.model("OurEvent", OurEventSchema);
