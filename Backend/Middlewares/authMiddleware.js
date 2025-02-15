const jwt = require("jsonwebtoken");
const User = require("../Models/Users");

// Protect Middleware
const protect = async (req, res, next) => {
  try {
    const token = req.cookies?.token; // Ensure token is fetched safely
    if (!token) {
      return res
        .status(401)
        .json({ message: "Not authorized, no token found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Token expired, please log in again" });
    } else if (error.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({ message: "Invalid token, authentication failed" });
    }
    return res.status(500).json({ message: "Server error in authentication" });
  }
};

// Admin Middleware
const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Access denied, admin privileges required" });
  }

  next();
};

module.exports = { protect, isAdmin };
