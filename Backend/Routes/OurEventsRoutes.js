const express = require("express");
const multer = require("multer");
const path = require("path");
const OurEvent = require("../Models/OurEvents");

const router = express.Router();

// Multer setup for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Create event
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, date, time, description, location, organizer } = req.body;

    const event = new OurEvent({
      title,
      date,
      time,
      description,
      location,
      organizer,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : "",
    });

    await event.save();
    res.status(201).json({ message: "Event created successfully", event });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});




// Get all events route
router.get("/", async (req, res) => {
  try {
    const events = await OurEvent.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
});



module.exports = router;
