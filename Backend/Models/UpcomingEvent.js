const mongoose = require("mongoose");

const UpcomingEventSchema = new mongoose.Schema({
  eventName: { type: String,required: true,},
  date: {type: String,required: true,},
  time: {type: String,required: true,},
  description: {type: String,required: true,minlength: 10,},
  imageUrl: {type: String,required: false, },
});

module.exports = mongoose.model("UpcomingEvent", UpcomingEventSchema);
