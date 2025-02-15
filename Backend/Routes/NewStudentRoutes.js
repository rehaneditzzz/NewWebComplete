const express = require("express");
const router = express.Router();
const { addStudent, getStudents,deleteStudent } = require("../Controllers/NewStudentController");

router.post("/add", addStudent);
router.get("/get", getStudents);
router.delete("/delete-student/:id", deleteStudent);

module.exports = router;
