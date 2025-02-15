import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500">
          404
        </h1>
        <p className="text-2xl mt-4">Oops! Page Not Found</p>
        <p className="text-lg mt-2 text-gray-400">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-2xl hover:from-purple-500 hover:to-indigo-500 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>

      <div className="absolute bottom-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default NotFound;
