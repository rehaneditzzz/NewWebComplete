const express = require("express");
const { signupUser, loginUser } = require("../Controllers/authController");
const router = express.Router();

// Register user
router.post("/signup", signupUser);

// Login user
router.post("/login", loginUser);

module.exports = router;
