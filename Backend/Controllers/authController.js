const jwt = require("jsonwebtoken");
const User = require("../Models/Users");

// Generate a JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1d", 
  });
};


// Signup new user
const signupUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create and save new user
    const user = new User({ username, email, password, role });
    await user.save();

    // Generate JWT token
    const token = generateToken(user);

    // Set token in cookie
    res.cookie("token", token, {
      httpOnly: true,
    });

    res
      .status(201)
      .json({
        token,
        message: "User created",
        userId: user._id,
        role: user.role,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Login existing user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate inputs
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });

    // Validate user and password
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = generateToken(user);

    // Set token in cookie
    res.cookie("token", token, {
      httpOnly: true,
    });

    res
      .status(200)
      .json({
        token,
        message: "Login successful",
        userId: user._id,
        role: user.role,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
