/* eslint-disable react/prop-types */
const Header = ({ onSearch }) => {
  return (
   <div className="main flex flex-col">
       <div className="bg-gray-800 text-white p-8 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search Students or Teachers..."
        className="w-full max-w-md px-3 py-1 rounded bg-gray-700 text-white focus:outline-none"
        onChange={onSearch}
      />
      <div className="flex  items-center  space-x-4">

        <button className="bg-green-500 px-4 py-1 rounded">Profile</button>
        <button className="bg-red-500 px-4 py-1 rounded">LogOut</button>
      </div>
    </div>
   </div>
  );
};

export default Header;