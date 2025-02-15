const StudentAdd = require("../Models/NewStudent");

// Add a student
exports.addStudent = async (req, res) => {
  try {
    const student = new StudentAdd(req.body);
    await student.save();

    console.log("find error")
    res.status(201).json({ message: "Student added successfully", student });
  } catch (error) {
    res.status(500).json({ message: "Error adding student", error });
    console.log('error find')
  }
};

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10; // **Page ka limit**
    const skip = (page - 1) * limit;

    const students = await StudentAdd.find().skip(skip).limit(limit);
    const totalStudents = await StudentAdd.countDocuments();

    res.status(200).json({
      students,
      totalPages: Math.ceil(totalStudents / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error });
  }
};




exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await StudentAdd.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student", error: error.message });
  }
};
