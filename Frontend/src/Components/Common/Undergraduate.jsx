import Carousel from "../Carousal/Carousel";

const Undergraduate = () => {
  return (
    <>
      <div className="mt-6 container  bg-white  h-[90%] p-2  border-t border-purple-700">
        <h1 className="text-2xl">
          Under Graduate Programs <span className="opacity-30">(11)</span>
        </h1>
        {/* Slider Section */}
        <div className="div pt-2 h-full gap-2 flex flex-col">
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Undergraduate;
