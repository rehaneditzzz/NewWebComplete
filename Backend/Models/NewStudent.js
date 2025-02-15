const mongoose = require("mongoose");

const NewStudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String, required: true },
  department: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  year: { type: String, required: true },
  message: { type: String },
});

module.exports = mongoose.model("NewStudent", NewStudentSchema);
