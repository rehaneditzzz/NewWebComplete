require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const connectDB = require("./Config/db");

// Import Routes
const AuthRoutes = require("./Routes/AuthRoutes");
const ProtectedRoutes = require("./Routes/ProtectedRoutes");
const AdminDashboardRoutes = require("./Routes/AdminDashboardRoutes");
const ApplyStudentRoutes = require("./Routes/ApplyStudentRoutes");
const UnderGraduateRoutes = require("./Routes/UnderGraduateRoutes");
const PostGraduateRoutes = require("./Routes/PostGraduateRoutes");
const UpcomingEventsRoutes = require("./Routes/UpcomingEventsRoutes");
const ourEventRoutes = require("./Routes/OurEventsRoutes");
const NewStudentRoutes = require("./Routes/NewStudentRoutes");
const NewTeacherRoutes = require("./Routes/NewTeacherRoutes");
// const studentFormRoutes = require("./routes/studentFormRoutes"); 

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/user", ProtectedRoutes);
app.use("/api/admin", AdminDashboardRoutes);
app.use("/api/students", ApplyStudentRoutes);
app.use("/api/programs", UnderGraduateRoutes);
app.use("/api/programs2", PostGraduateRoutes);
app.use("/api/events", UpcomingEventsRoutes);
app.use("/api/ourevents", ourEventRoutes);
app.use("/api/addnewstudent", NewStudentRoutes);
app.use("/api/teachers", NewTeacherRoutes);
// app.use("/api/student-form", studentFormRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
