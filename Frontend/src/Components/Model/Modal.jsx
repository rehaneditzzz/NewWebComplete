/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import Card from "./Card";

const programs = {
  "Under Graduate Programs": [
    {
      title: "Bcom Bachler of Commerce",
      duration: "3 Years",
      type: "Full Time",
    },
    {
      title: "BBA Bachler of Business Administration",
      duration: "3 Years",
      type: "Full Time",
    },
    {
      title: "BCCA Bachler of Computer Application",
      duration: "3 Years",
      type: "Full Time",
    },
  ],
  "Post Graduate Programs": [
    {
      title: "MBA in Management Studies",
      duration: "2 Years",
      type: "Full Time",
    },
    { title: "MBA in Marketing", duration: "1 Year", type: "Part Time" },
    { title: "Mcom Master of Commerce", duration: "1 Year", type: "Part Time" },
  ],
  PhD: [
    {
      title: "Ph.D. in Computer Science",
      duration: "5 Years",
      type: "Full Time",
    },
    { title: "Ph.D. in Management", duration: "3 Years", type: "Part Time" },
  ],
};

const Modal = ({ closeModal }) => {
  const modalRef = useRef(null);
  const [selectedProgram, setSelectedProgram] = useState(
    "Under Graduate Programs"
  );

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-start pt-20 lg:pt-40 justify-center">
      <div
        ref={modalRef}
        className="absolute h-3/5 w-4/5 sm:w-11/12 md:w-9/12 lg:w-3/5 xl:w-3/5 bg-white z-20 rounded-lg p-7 overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 h-full">
          {/* Left Panel */}
          <div className="overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200">
            <h1 className="text-2xl font-semibold">Programs Offered</h1>
            <ul className="flex flex-col gap-4 mt-4">
              {Object.keys(programs).map((program) => (
                <li key={program}>
                  <h2
                    className={`text-lg p-2 rounded-md cursor-pointer transition-all ${
                      selectedProgram === program
                        ? "bg-purple-500 "
                        : "hover:bg-purple-100"
                    }`}
                    onClick={() => setSelectedProgram(program)}
                  >
                    {program}
                  </h2>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Panel */}
          <div className="col-span-2 flex flex-col gap-4 p-4 overflow-y-auto h-full">
            {programs[selectedProgram].map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
