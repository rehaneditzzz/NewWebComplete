const express = require("express");
const { protect } = require("../Middlewares/authMiddleware");
const router = express.Router();

router.get("/profile", protect, (req, res) => {
  res.json({
    username: req.user.username,
    email: req.user.email,
    role: req.user.role,
  });
});

module.exports = router;
