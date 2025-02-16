/* eslint-disable react/prop-types */
const Card = ({ title, duration, type }) => (
    <div className="bg-white h-44 p-4 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-101">
      <h1 className="text-2xl font-medium text-gray-800 mb-2 ">{title}</h1>
      <div className="flex justify-between text-gray-500 text-sm mb-3">
        <span>{duration}</span>
        <span>{type}</span>
      </div>
      <div className="flex justify-between gap-3">
        <button className="border border-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-tl-lg rounded-br-lg text-sm transition-all duration-300">
          Learn More
        </button>
        <a href="/apply/now" className="border border-purple-500 bg-purple-500 text-white px-5 py-2 rounded-tl-lg rounded-br-lg text-sm transition-all duration-300 hover:bg-purple-600">
          Apply Now
        </a>
      </div>
    </div>
  );
  
  export default Card;
  