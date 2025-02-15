import Postgraduate from "../../Components/Common/Postgraduate";
import Undergraduate from "../../Components/Common/Undergraduate";

const MainCarousal = () => {
  return (
    <>
      <div className="h-auto pt-20 lg:pt-24  w-full ">
        <div className="container block m-auto px-3">
          <h1 className="bg-clip-text   text-transparent bg-gradient-to-r from-purple-700 via-red-600 to-orange-500 text-4xl font-semibold ">
            Discover Our Programs
          </h1>
          {/* Slider Section 1*/}
          <Undergraduate />
          {/* Slider Section 2*/}
          <Postgraduate />
        </div>
      </div>
    </>
  );
};

export default MainCarousal;
