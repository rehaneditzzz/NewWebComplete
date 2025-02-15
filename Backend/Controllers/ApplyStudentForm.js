const express = require("express");
const multer = require("multer");
const path = require("path");
const ApplyStudent = require("../Models/ApplyStudent"); // Import the existing model

const router = express.Router();

// Multer Configuration
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// API Endpoint to add student
router.post("/form", upload.single("photo"), async (req, res) => {
  try {
    const { firstname, lastname, email, address, phone, dob, placeOfBirth } = req.body;
    
    const student = new ApplyStudent({
      firstname,
      lastname,
      email,
      address,
      phone,
      dob,
      placeOfBirth,
      photo: req.file?.filename || "",
    });

    await student.save();
    res.status(200).json({ message: "Student added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving student data" });
  }
});

module.exports = router;
