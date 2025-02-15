require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const programRoutes = require("./routes/programRoutes"); // Import program routes
const PostGraduate = require("./routes/PostGraduateProgramme"); // Import program routes
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes"); // Added student routes
const eventRoutes = require("./routes/eventRoutes");
const ourEventRoutes = require("./routes/ourEventRoutes");
const studentAddRoutes = require("./routes/newStudent");
const path = require("path");
const newStudentAdd = require("./routes/newStudent")
const teacherRoutes = require("./routes/teacherRoutes");




const connectDB = require("./config/db");

const app = express();

// Connect to the database
connectDB();
app.use(bodyParser.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Use routes
app.use("/api/auth", authRoutes); // Fixed: Added leading slash
app.use("/api/user", userRoutes); // Fixed: Added leading slash
app.use("/api/admin", adminRoutes); // Fixed: Added leading slash
app.use("/api/students", studentRoutes); // Student form API routes



// Programme add
app.use("/api/programs", programRoutes);
app.use("/api/programs2", PostGraduate);

//Event add
app.use("/api/events", eventRoutes);
app.use("/api/our-events", ourEventRoutes);

// add student
app.use("/api/addnewstudent", studentAddRoutes);

// add student entry to db
app.use("/api/add-student", newStudentAdd)


// add new teacher in db
app.use("/api/teachers", teacherRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
