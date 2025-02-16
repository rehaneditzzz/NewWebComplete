import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { IoShareSocial } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";
import { PiCalendarLight } from "react-icons/pi";

const Carousal = () => {
  const sliderRef = useRef(null);
  const [programs, setPrograms] = useState([]);
  let isScrolling = false;

  // Fetch programs from the API
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/programs");
        console.log(response.data); // Log programs data
        setPrograms(response.data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, []);

  // Scroll functionality
  const scrollSlider = (direction) => {
    if (isScrolling) return; // Prevent multiple triggers
    isScrolling = true;

    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth / 3; // Smooth scrolling by 1/3rd of visible area
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isScrolling = false; // Reset scrolling lock
    }, 300); // Match with transition duration
  };

  return (
    <div className="h-96">
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          className="absolute z-40 left-4 top-1/2 transform -translate-y-1/2 bg-zinc-200 rounded-full px-2 hover:bg-zinc-300"
          onClick={() => scrollSlider("left")}
        >
          &#10094;
        </button>

        {/* Carousal Content */}
        <div
          ref={sliderRef}
          className="m-auto flex h-96 lg:w-[71vw] p-2 overflow-x-auto space-x-4 snap-x snap-mandatory"
        >
          {programs.length > 0 ? (
            programs.map((program, index) => (
              <div
                key={index}
                className="shadow-lg carousal-item relative h-full rounded-lg p-3 w-64 flex-shrink-0 snap-center"
              >
                {/* Image Section */}
                <div className="contMainTop h-2/4">
                  <img
                    src={`http://localhost:3000/uploads/${program.image}`} // Correct image path
                    alt={program.title}
                    loading="lazy"
                    className="rounded-t-lg h-full object-cover w-full"
                  />
                </div>

                {/* Program Info Section */}
                <div className="contMainBottom h-2/4 bg-slate-50 grid px-1">
                  {/* Title and Share Icon */}
                  <div className="titleDiv1 flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold w-4/5">
                      {program.title}
                    </h3>
                    <span className="w-1/5">
                      <IoShareSocial size={20} color="blue" />
                    </span>
                  </div>

                  {/* Duration and Type */}
                  <div className="durationDiv2 flex justify-between">
                    <div className="span1 flex items-center gap-2">
                      <WiTime3 size={20} />
                      <p className="text-sm text-zinc-600">
                        {program.duration}
                      </p>
                    </div>
                    <div className="span2 flex items-center gap-2">
                      <PiCalendarLight size={20} />
                      <p className="text-sm text-zinc-600">{program.type}</p>
                    </div>
                  </div>

                  {/* Learn More and Apply Now Buttons */}
                  <div className="btnDiv3 bottom-4 w-full px-1">
                    <div className="mt-4 flex justify-between items-center">
                      <a
                        href="#"
                        className="bg-purple-600 text-white rounded-tr-xl rounded-bl-xl py-2 px-3"
                      >
                        Learn More
                      </a>
                      <a href="/apply/now" className="border border-orange-600 rounded-tl-xl rounded-br-xl py-2 px-3">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading programs...</p>
          )}
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-zinc-200 rounded-full px-2 hover:bg-zinc-300"
          onClick={() => scrollSlider("right")}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousal;
