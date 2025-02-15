const express = require("express");
const multer = require("multer");
const path = require("path");
const UnderGraduate = require("../Models/UnderGraduate");
const cors = require("cors");

const router = express.Router();
router.use(cors());

// Multer configuration for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// POST: Add a new program
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, duration, type } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const program = new UnderGraduate({
      title,
      duration,
      type,
      image: req.file.filename,
    });

    await program.save();
    res.status(200).json({ message: "Program added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message || "Error saving program data" });
  }
});

// GET: Fetch all programs
router.get("/", async (req, res) => {
  try {
    const programs = await UnderGraduate.find();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error fetching programs" });
  }
});

module.exports = router;
