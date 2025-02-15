import { useState, useEffect } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchStudents = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:3000/api/addnewstudent/get?page=${page}`
      );
      const { students, totalPages, currentPage } = response.data;

      if (students.length === 0) {
        setHasMore(false);
      } else {
        setStudents(students); // **Yeh pehle empty array ko students se replace karega**
        setPage(currentPage + 1); // **Next page ke liye increment karega**
        setHasMore(currentPage < totalPages); // **Check karega ki aur pages hain ya nahi**
      }
    } catch (error) {
      console.error(
        "Error fetching students:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents(); // **Component mount hote hi data fetch hoga**
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Delete student
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/addnewstudent/delete-student/${id}`
      );
      setStudents(students.filter((student) => student._id !== id));
    } catch (error) {
      console.error(
        "Error deleting student:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="container mx-auto p-4 h-[70vh] overflow-y-scroll">
      <h2 className="text-xl font-semibold text-gray-800">Student List</h2>
      <p className="text-gray-600 mt-1">List of all students</p>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full bg-white border-t border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Course
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Year
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student._id}
                className="border-t border-gray-200 hover:bg-gray-100"
              >
                <td className="px-6 py-3 text-sm text-gray-700">
                  {student.name}
                </td>
                <td className="px-6 py-3 text-sm text-red-500">
                  {student.course}
                </td>
                <td className="px-6 py-3 text-sm text-gray-700">
                  {student.email}
                </td>
                <td className="px-6 py-3 text-sm text-green-600">
                  {student.year}
                </td>
                <td className="px-6 py-3 text-sm">
                  <button
                    onClick={() => handleDelete(student._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {loading && (
          <div className="text-center p-4 text-gray-500">
            Loading more students...
          </div>
        )}
        {!hasMore && !loading && (
          <div className="text-center p-4 text-gray-500">
            No more students to load.
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;
