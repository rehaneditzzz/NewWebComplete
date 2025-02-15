/* eslint-disable react/prop-types */

const CollegeTotal = ({ number, description }) => {
  return (
    <div className="h-24 sm:h-28 p-4 flex flex-col items-start lg:items-center justify-center rounded-lg shadow-md">
      <h3 className="text-xl lg:text-3xl text-purple-600 font-bold">{number}</h3>
      <p className="mt-2 text-base tracking-wide">{description}</p>
    </div>
  );
};

export default CollegeTotal;
