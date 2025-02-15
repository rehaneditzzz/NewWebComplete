import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Principal Dr. Sujit G. Metre",
    role: "Principal, Binzani College",
    image: "/prin.jpeg",
    message:
      "It is an honor to lead Binzani College, fostering academic excellence and holistic development for our students. Together, we aim to shape the leaders of tomorrow.",
  },
  {
    id: 2,
    name: "Prof. Pranjali Kane",
    role: "Head of Department, Computer Science",
    image: "/pranjalikane.jpeg",
    message:
      "Our students' achievements reflect the hard work and dedication of the Binzani College community. Proud to see them excel in academics and co-curricular activities.",
  },
  {
    id: 3,
    name: "Adv. Rajeev Deo",
    role: "Alumni",
    image: "/rajeev.jpg",
    message:
      "Binzani College has been a transformative journey for me. The faculty and facilities here prepared me for challenges in the real world.",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 py-20 px-11 bg-purple-100">
      <h2 className="text-2xl font-bold text-purple-700">Our Testimonials</h2>
      <div className="relative w-full max-w-xl p-6 mt-6 bg-white border rounded-lg shadow-lg">
        <div className="flex items-center space-x-4 ">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-16  h-16 rounded-full"
          />
          <div>
            <p className="text-sm text-gray-600">
              {testimonials[current].message}
            </p>
            <p className="mt-2 font-semibold text-purple-700">
              {testimonials[current].name}
            </p>
            <p className="text-xs text-gray-500">
              {testimonials[current].role}
            </p>
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="absolute flex items-center justify-between w-full top-1/2 -translate-y-1/2 -mx-8 ">
          <button
            className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full shadow-lg hover:bg-purple-300 transition-all duration-300 lg-left-12 -left-8 absolute"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full shadow-lg hover:bg-purple-300 transition-all duration-300 lg-right-16 -right-12 absolute"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
