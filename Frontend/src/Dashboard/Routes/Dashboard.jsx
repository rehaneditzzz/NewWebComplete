import { Routes, Route } from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import TeacherAdd from "../Pages/TeacherAdd";
import UpcomingEventForm from "../Pages/UpcomingEventForm";
import OurEventForm from "../Pages/OurEventForm";
import StudentList from "../Pages/StudentList";
import StudentAdd from "../Pages/StudentAdd";
import TeacherList from "../Pages/TeacherList";
import UnderGraduateCourseForm from "../Pages/UnderGraduateCourseForm";
import PostGraduateCourseForm from "../Pages/PostGraduateCourseForm";
// import Header from "../Layout/Header";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col pt-16">
        {/* <Header /> */}
        <div className="p-4 flex-1">
          <Routes>
            <Route path="/ourevents" element={<OurEventForm />} />
            <Route path="/events" element={<UpcomingEventForm />} />
            <Route path="/students" element={<StudentAdd />} />
            <Route path="/studentlist" element={<StudentList />} />
            <Route path="/teachers" element={<TeacherAdd />} />
            <Route path="/teacherlist" element={<TeacherList />} />
            <Route path="/course" element={<UnderGraduateCourseForm />} />
            <Route path="/course2" element={<PostGraduateCourseForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
