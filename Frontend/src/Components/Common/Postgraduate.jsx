import Carousel2 from "../Carousal/Carousel2";

const Postgraduate = () => {
  return (
    <>
      <div className="mt-6 container  h-[90%] p-2  border-t border-purple-700">
        <h1 className="text-2xl">
          Post Graduate Programs <span className="opacity-30">(8)</span>
        </h1>

        {/* Slider Section */}
        <div className="div pt-2 h-full gap-2 flex flex-col">
          <Carousel2 />
        </div>
      </div>
    </>
  );
};

export default Postgraduate;
