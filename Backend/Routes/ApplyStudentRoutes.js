const express = require("express");
const multer = require("multer");
const path = require("path");
const Student = require("../Models/ApplyStudent");
const router = express.Router();

// Serve static files (uploaded photos)
router.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Multer Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

// POST request for submitting student form
router.post("/", upload.single("photo"), async (req, res) => {
    try {
        const { firstname, lastname, email, address, phone, dob, placeOfBirth } = req.body;

        const student = new Student({
            firstname,
            lastname,
            email,
            address,
            phone,
            dob,
            placeOfBirth,
            photo: req.file.filename, // Save photo file name
        });

        await student.save();
        res.status(200).json({ message: "Student added successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error saving student data" });
    }
});

module.exports = router;
