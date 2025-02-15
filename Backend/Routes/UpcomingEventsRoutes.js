const express = require("express");
const multer = require("multer");
const path = require("path");
const Event = require("../Models/UpcomingEvent");

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
    const { eventName, date, time, description } = req.body;
    let imageUrl = "";

    // Handle image if uploaded
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    const newEvent = new Event({
      eventName,
      date,
      time,
      description,
      imageUrl,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
});

// Get all events route
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
});

module.exports = router;
