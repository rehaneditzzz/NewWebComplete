const express = require("express");
const { protect, isAdmin } = require("../Middlewares/authMiddleware");
const router = express.Router();

// Admin dashboard route
router.get("/admin-dashboard", protect, isAdmin, (req, res) => {
  res.json({ message: `Welcome to the Admin Dashboard ${req.user.email}` });
});

module.exports = router;
