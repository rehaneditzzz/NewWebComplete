import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaCalendar,
  FaChalkboardTeacher,
  FaUserGraduate,
} from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsBookHalf } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Define the navigation items in an array
  const navItems = [
    {
      to: "/dashboard/events",
      icon: <FaCalendar className="text-xl" />,
      label: "Create Events",
    },
    {
      to: "/dashboard/ourevents",
      icon: <FaCalendar className="text-xl" />,
      label: "Create Our Events",
    },
    {
      to: "/dashboard/teachers",
      icon: <FaChalkboardTeacher className="text-xl" />,
      label: "Add Teachers",
    },
    {
      to: "/dashboard/students",
      icon: <FaUserGraduate className="text-xl" />,
      label: "Add Students",
    },
    {
      to: "/dashboard/studentlist",
      icon: <HiMiniUserGroup className="text-xl" />,
      label: "Student Data",
    },
    {
      to: "/dashboard/teacherlist",
      icon: <HiMiniUserGroup className="text-xl" />,
      label: "Teacher Data",
    },
    {
      to: "/dashboard/course",
      icon: <BsBookHalf className="text-xl" />,
      label: "Create Under Graduate Course",
    },
    {
      to: "/dashboard/course2",
      icon: <BsBookHalf className="text-xl" />,
      label: "Create Post Graduate Course",
    },
  ];

  return (
    <div
      className={`h-screen bg-gradient-to-b from-gray-800 to-gray-900 ${
        isOpen ? "w-64" : "w-14"
      } transition-all duration-300 shadow-lg pt-24`}
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-between p-4 text-white">
        <FaBars
          className="cursor-pointer text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Navigation Links */}
      <nav className="mt-8">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className="flex items-center gap-4 mt-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-50 rounded-full"
            activeClassName="bg-gray-700 text-white"
          >
            {item.icon}
            <span className={`${isOpen ? "block" : "hidden"} text-sm`}>
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
