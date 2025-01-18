import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-xl font-semibold text-gray-800">
            MyLogo
          </div>

          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/userlocation"
              className="text-gray-700 hover:text-indigo-600 transition duration-300"
            >
              Map
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-indigo-600 focus:outline-none">
              <FaBars/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
