import { useState, useEffect } from "react";
import Programme from "../Model/ProgrameButton";
import Modal from "../Model/Modal";
import { Link, useNavigate } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user authentication
  const navigate = useNavigate();

  const items = [
    {
      name: "About",
      href: "/",
      dropdown: [
        { name: "President's desk", href: "/about/president" },
        { name: "Secretary's desk", href: "/about/secretary" },
        { name: "Principle's desk", href: "/about/principle" },
        { name: "Vision & Mission", href: "/about/vision" },
      ],
    },
    {
      name: "Academic",
      href: "/academic",
      dropdown: [
        { name: "Undergraduate", href: "/academic/graduation" },
        { name: "Postgraduate", href: "/academic/graduation" },
        { name: "Curriculum", href: "/academic/curriculum" },
      ],
    },
    {
      name: "Admission",
      href: "/admission",
      dropdown: [
        { name: "Apply Now", href: "/apply/now" },
        { name: "Scholarships", href: "/apply/scholarships" },
      ],
    },
    {
      name: "Research",
      href: "/research",
      dropdown: [
        { name: "Projects", href: "/research/projects" },
        { name: "Innovation", href: "/research/innovation" },
      ],
    },
    {
      name: "Campus",
      href: "/campus",
      dropdown: [
        { name: "Facilities", href: "/campus/facilities" },
        { name: "Events", href: "campus/events" },
        { name: "Sports", href: "/campus/sports" },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
      dropdown: [
        { name: "Address", href: "/contact/address" },
        { name: "Phone", href: "/contact/phone" },
        { name: "Email", href: "/contact/email" },
        { name: "Feedback", href: "/contact/feedback" },
      ],
    },
  ];

  const handleDropdownToggle = (index) => {
    setDropdownOpen((prev) => (prev === index ? null : index));
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown-container")) {
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Retrieve the user's role from localStorage
    const role = localStorage.getItem("userRole");
    const token = localStorage.getItem("authToken"); // Check for an authentication token

    if (role && token) {
      setUserRole(role.toLowerCase()); // Ensure case consistency
      setIsAuthenticated(true); // User is authenticated
    } else {
      setUserRole(null);
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token
    localStorage.removeItem("userRole"); // Remove role if stored
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      <header className="w-full h-auto px-4  lg:px-11 flex items-center justify-between text-white fixed z-10 shadow-md bg-gradient-to-t from-transparent to-black">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-14 md:h-20 w-auto rounded-full"
            />
          </Link>
          <div onClick={toggleModal}>
            <Programme />
          </div>
        </div>

        <nav className="hidden md:flex flex-grow justify-center space-x-6 md:space-x-1">
          {items.map((item, index) => (
            <div key={index} className="relative group dropdown-container">
              <ul className="flex items-center space-x-4">
                <li
                  className="px-4 py-2 cursor-pointer transition-all duration-300 hover:text-purple-400"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation
                    handleDropdownToggle(index); // Open or close the dropdown
                  }}
                >
                  <span>{item.name}</span>
                </li>
                {/* Dropdown */}
                {dropdownOpen === index && (
                  <div className="absolute left-0 top-12 pt-6 w-48 bg-slate-200 text-purple-600 bg-opacity-90 rounded-lg shadow-lg mt-2">
                    {item.dropdown.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        to={dropdownItem.href}
                        className="block text-sm font-semibold px-4 py-2 hover:bg-slate-200 rounded-lg hover:shadow-md hover:translate-x-3 transition-all duration-200"
                        onClick={() => setDropdownOpen(null)} // Close dropdown on click
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex space-x-4">
          {/* Show Dashboard button only if user is authenticated and an admin */}
          {isAuthenticated && userRole === "admin" && (
            <Link
              to="/dashboard"
              className="btn bg-purple-600 px-6 py-[5px] rounded-bl-3xl rounded-tr-3xl"
            >
              Dashboard
            </Link>
          )}
          <Link
            to="/login"
            className="btn bg-purple-600 px-6 py-[4px] rounded-bl-3xl rounded-tr-3xl"
          >
            Login
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 p-2 rounded-full hover:bg-red-600"
          >
            <RiLogoutCircleRLine size={20} />
          </button>
        </div>

        <button
          className="md:hidden focus:outline-none relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`w-8 h-1 bg-white rounded-full transition-all duration-300 transform ${
              isMenuOpen
                ? "rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2"
                : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-white rounded-full transition-all duration-300 mt-2 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-white rounded-full transition-all duration-300 mt-2 transform ${
              isMenuOpen
                ? "-rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2"
                : ""
            }`}
          ></div>
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full sm:w-1/2 rounded-b-2xl bg-slate-200 bg-opacity-90 text-white flex flex-col items-start gap-4 p-4 z-10 min-h-[40vh] overflow-y-auto">
            {items.map((item, index) => (
              <div key={index} className="relative dropdown-container">
                <div
                  className="block cursor-pointer w-72 text-sm px-4 py-2 transition-all text-purple-600 duration-300 hover:bg-slate-200 rounded-lg hover:shadow-md hover:translate-x-2"
                  onClick={() => handleDropdownToggle(index)}
                >
                  {item.name}
                </div>
                {dropdownOpen === index && (
                  <div className="pl-4">
                    {item.dropdown.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        to={dropdownItem.href}
                        className="block text-sm px-4 py-2 transition-all text-purple-600 duration-300 hover:bg-slate-200 rounded-lg hover:shadow-md hover:translate-x-2"
                        onClick={() => {
                          setDropdownOpen(null);
                          setIsMenuOpen(false);
                        }}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
      {isModalOpen && <Modal closeModal={toggleModal} />}
    </>
  );
};

export default Header;
