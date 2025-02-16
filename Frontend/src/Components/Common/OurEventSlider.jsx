import { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OurEventSlider = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/ourevents");
        setEvents(response.data);
      } catch (err) {
        setError("Failed to load events",err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  if (loading) return <p className="text-center text-gray-500">Loading events...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (events.length === 0) return <p className="text-center text-gray-500">No events available.</p>;

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-purple-700 mb-6">Our Events</h2>
      <p className="text-lg text-gray-600 mb-8">Stay updated with our latest events</p>

      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {events.map((event) => (
            <div key={event._id} className="p-4">
              <div
                className="relative h-72 bg-cover bg-center rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                style={{ backgroundImage: `url(http://localhost:3000${event.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50  flex flex-col justify-end p-6">
                  <span className="text-sm font-medium text-gray-300">{event.date} | {event.time}</span>
                  <h3 className="mt-2 text-2xl font-bold text-white">{event.title}</h3>
                  <p className="text-gray-300 text-sm">{event.location}</p>
                  <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurEventSlider;
