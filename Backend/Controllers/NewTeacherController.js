const Teacher = require("../Models/NewTeacher");

// Add a new teacher
exports.addTeacher = async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json({ message: "Teacher added successfully", teacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all teachers
exports.getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Delete a teacher by ID
exports.deleteTeacher = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTeacher = await Teacher.findByIdAndDelete(id);
  
      if (!deletedTeacher) {
        return res.status(404).json({ message: "Teacher not found" });
      }
  
      res.status(200).json({ message: "Teacher deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting teacher", error: error.message });
    }
  };