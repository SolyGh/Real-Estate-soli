

import { useState } from "react";
import { FaBars, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { TbHomeCheck } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="lg:block hidden bg-[#0ca39a] text-white py-2">
        <div className="container mx-auto lg:flex hidden items-center justify-between px-3">
          <span className="flex items-center gap-x-1">
            <GoLocation />
            <p className="text-sm">address cairo , 26</p>
          </span>
          <div className="flex items-center gap-x-4">
            <span className="flex items-center gap-x-1">
              <FaPhone />
              <p>+20 01010351108</p>
            </span>
            <span className="flex items-center gap-x-1">
              <FaRegEnvelope />
              <p>support@soly.com</p>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#0ca39a] text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex items-center gap-x-4">
            <button
              className="lg:hidden text-xl"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <AiOutlineClose /> : <FaBars />}
            </button>

            <TbHomeCheck className="w-10 h-10" />
            <p className="font-medium text-xl">SoliHub</p>
          </div>

          <ul
            className={`lg:flex items-center gap-x-4 list-none lg:ml-auto ${
              navbarOpen ? "flex flex-wrap" : "hidden"
            }`}
          >
            <li className="py-2">
              <button className="bg-white text-[#0ca39a] rounded-full px-4 py-1 hoverBtn">
                Home
              </button>
            </li>
            <li className="py-2">
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-white hover:text-gray-300">
                Listings
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-white hover:text-gray-300">
                Services
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-white hover:text-gray-300">
                Blogs
              </a>
            </li>
            <li className="py-2">
              <button className="py-4 flex items-center gap-2 text-white hover:text-gray-300">
                <IoPersonCircleOutline />
                <p>Login/Register</p>
              </button>
            </li>
            <li className="py-2">
              <button className="bg-white text-[#0ca39a] rounded-full px-6 py-2 flex items-center hoverBtn">
                <TbHomeCheck className="text-xl" />
                <p>Add Listings</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
