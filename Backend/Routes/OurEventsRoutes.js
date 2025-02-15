const express = require("express");
const multer = require("multer");
const path = require("path");
const OurEvent = require("../Models/OurEvents");

const router = express.Router();

// Set up multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Create event route
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, date, time, description, location, organizer } = req.body;
    let imageUrl = "";

    // Handle image if uploaded
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    const ourEvent = new OurEvent({
      title,
      date,
      time,
      description,
      location,
      organizer,
      imageUrl,
    });

    const savedEvent = await ourEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
});

// Get all events route
router.get("/", async (req, res) => {
  try {
    const ourevents = await OurEvent.find();
    res.status(200).json(ourevents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
});

module.exports = router;
