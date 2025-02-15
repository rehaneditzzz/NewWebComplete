const CampusLife = () => {
  return (
    <div className="min-h-auto py-4 w-full bg-slate-50 flex justify-center pt-4">
      <div className="main h-4/5 w-full max-w-6xl px-4  sm:py-4 md:py-6 lg:py-8  rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-700 to-red-600">
          Student Life and Campus
        </h1>
        <div className="photo grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 mt-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 h-24 lg:h-48 rounded-lg overflow-hidden">
            <img className="" src="/bg1.jpg" alt="" />
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 h-24 lg:h-48 rounded-lg overflow-hidden">
            <img className="" src="/bg2.jpg" alt="" />
          </div>
          <div className="col-span-2  sm:col-span-2 md:col-span-3 lg:col-span-2 h-24 lg:h-48 rounded-lg overflow-hidden">
            <img className="" src="/bg3.jpg" alt="" />
          </div>
          <div className="col-span-1 sm:col-span-2 h-24 lg:h-48 rounded-lg overflow-hidden">
            <img className="" src="/bg4.jpg" alt="" />
          </div>
          <div className="col-span-1 sm:col-span-1 h-24 lg:h-48 rounded-lg overflow-hidden">
            <img className="" src="/bg5.jpg" alt="" />
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 h-24 lg:h-48 rounded-lg overflow-hidden">
            <img className="" src="/bg6.jpg" alt="" />
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 h-24 lg:h-48 rounded-lg overflow-hidden">
            <img className="" src="/bg7.jpg" alt="" />
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 h-24 lg:h-48 rounded-lg overflow-hidden">
            <img className="" src="/bg1.jpg" alt="" />
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 h-24 lg:h-48 rounded-lg overflow-hidden">
            <img className="" src="/bg1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
