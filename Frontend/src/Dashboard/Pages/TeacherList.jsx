import { useState, useEffect } from "react";
import axios from "axios";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchTeachers = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:3000/api/teachers/get?page=${page}`);
      const newTeachers = response.data.teachers || response.data || [];
      if (!Array.isArray(newTeachers)) {
        throw new Error("Invalid response format");
      }

      if (newTeachers.length === 0) {
        setHasMore(false);
      } else {
        setTeachers((prevTeachers) => [...prevTeachers, ...newTeachers]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching teachers:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Delete teacher
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/teachers/delete/${id}`);
      setTeachers(teachers.filter((teacher) => teacher._id !== id));
    } catch (error) {
      console.error("Error deleting teacher:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container mx-auto p-4 h-[70vh] overflow-y-scroll">
      <h2 className="text-xl font-semibold text-gray-800">Teacher List</h2>
      <p className="text-gray-600 mt-1">List of all teachers</p>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full bg-white border-t border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Subject</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Experience</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher._id} className="border-t border-gray-200 hover:bg-gray-100">
                <td className="px-6 py-3 text-sm text-gray-700">{teacher.name}</td>
                <td className="px-6 py-3 text-sm text-blue-500">{teacher.subject}</td>
                <td className="px-6 py-3 text-sm text-gray-700">{teacher.email}</td>
                <td className="px-6 py-3 text-sm text-green-600">{teacher.experience} years</td>
                <td className="px-6 py-3 text-sm">
                  <button
                    onClick={() => handleDelete(teacher._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {loading && <div className="text-center p-4 text-gray-500">Loading more teachers...</div>}
        {!hasMore && !loading && <div className="text-center p-4 text-gray-500">No more teachers to load.</div>}
      </div>
    </div>
  );
};

export default TeacherList;
