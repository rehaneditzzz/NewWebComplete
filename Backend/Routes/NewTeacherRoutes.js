const express = require("express");
const router = express.Router();
const { addTeacher, getTeachers, deleteTeacher } = require("../Controllers/NewTeacherController");

router.post("/add", addTeacher);
router.get("/get", getTeachers);
router.delete("/delete/:id", deleteTeacher);

module.exports = router;
