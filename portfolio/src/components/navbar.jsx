import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';


const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="px-8 md:px-16 lg:px-24 bg-black dark:bg-gray-900 text-white  text-white shadow transition-colors duration-300">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Mihinadi</div>

        <div className="space-x-6 flex items-center">
          <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-gray-400 transition-colors">About Me</a>
          <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>

         
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500 w-5 h-5" />
            ) : (
              <FaMoon className="text-yellow-500 w-5 h-5" />
            )}
          </button>
        </div>

        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;