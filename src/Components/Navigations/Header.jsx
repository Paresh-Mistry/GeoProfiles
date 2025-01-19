import React , {useState} from "react";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [hamburger, sethamburger] = useState(false)

  const ToggleHamburger = () =>{
    sethamburger(!hamburger)
  }

  return (
    <header>
      <nav className="bg-white z-0 shadow-md fixed top-0 left-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to={'/'} className="flex-shrink-0 text-xl font-semibold text-gray-800">
              <span className="uppercase">Geo</span><span className="text-blue-600">Profile</span>
            </Link>

            <div className="hidden md:flex space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-indigo-600 transition duration-300"
              >
                Home
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button className="text-gray-700 border p-2 rounded-full focus:outline-none" onClick={()=>ToggleHamburger()}>
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <aside className={`fixed z-10 bg-white shadow-lg top-0 left-0 min-h-screen md:w-1/4 w-2/4 transform transition-all ease-in-out duration-300 ${hamburger ? `translate-x-0` : `-translate-x-full`}`}>
        <div className="flex justify-between py-5 px-4 border-b">
          <div className="text-xs">Welcome</div>
          <div onClick={()=>ToggleHamburger()}><FaTimes /></div>
        </div>
        <div className="md:flex space-x-6 px-4 py-5">
          <Link
            to="/"
            className="text-gray-700 transition duration-300"
          >
            <FaHome className="inline mb-1"/>&nbsp;Home
          </Link>
        </div>
      </aside>

    </header>
  );
};

export default Navbar;
