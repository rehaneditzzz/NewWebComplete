require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL environment variable is not defined.");
    }
    console.log("Connecting to MongoDB with URL:", process.env.MONGO_URL);

    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB Connected");
  } catch (err) {
    console.error(`Database connection error: ${err.message}`);
    process.exit(1); // Exit the application if the database connection fails
  }
};

module.exports = connectDB;
