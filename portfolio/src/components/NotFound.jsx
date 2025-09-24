import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full hover:scale-105 transform transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
