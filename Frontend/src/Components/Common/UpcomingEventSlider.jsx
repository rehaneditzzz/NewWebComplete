import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const UpcomingEventSlider = () => {
  const [events, setEvents] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 pt-24">
      <div className="w-full md:w-3/4 lg:w-2/3 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
          Upcoming Events
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Refresh your mind with exciting events!
        </p>
      </div>

      {events.length > 0 ? (
        <Slider {...settings} className="w-full max-w-6xl">
          {events.map((event, idx) => (
            <div key={idx} className="p-4">
              <div
                className="relative bg-cover bg-center shadow-lg rounded-lg overflow-hidden h-64 flex items-end hover:shadow-xl transition-all"
                style={{
                  backgroundImage: `url(http://localhost:3000${event.imageUrl})`
                }}
                
              >
                {console.log(event.imageUrl)}

                {/* Date & Time Badge */}
                <div className="absolute top-4 left-4 bg-purple-700 overflow-hidden text-white font-semibold flex flex-col text-center items-center justify-center p-2 w-16 h-16 rounded-full shadow-md">
                  <span className="text-xs">{event.date.split(" ")[0]}</span>
                  <span className="text-xs">{event.date.split(" ")[1]}</span>
                </div>

                {/* Event Name */}
                <div className="bg-black/50 backdrop-blur-md text-white p-4 w-full text-center">
                  <h3 className="text-lg font-semibold">{event.eventName}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-gray-500 mt-4">No upcoming events</p>
      )}
    </div>
  );
};

export default UpcomingEventSlider;
