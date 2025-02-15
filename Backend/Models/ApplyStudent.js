const mongoose = require("mongoose");

const ApplyStudentSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    dob: { type: String, required: true },
    placeOfBirth: { type: String, required: true },
    photo: { type: String, required: true }, 
});

module.exports = mongoose.model("ApplyStudent", ApplyStudentSchema);

