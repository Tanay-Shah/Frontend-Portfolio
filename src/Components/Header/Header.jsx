import React from "react";
import { NavLink, Link } from "react-router";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md">
      <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-black px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-white font-bold text-xl">CodePlayground</span>
          </Link>

          {/* Right Buttons */}
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-white/90 hover:text-white border border-white/40 hover:border-blue-400 font-medium rounded-lg text-sm px-4 py-2 mr-2 transition"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm px-4 py-2 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Nav Links */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                     ${isActive ? "text-blue-400" : "text-white/70"} 
                     hover:text-blue-400 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                     ${isActive ? "text-blue-400" : "text-white/70"} 
                     hover:text-blue-400 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                     ${isActive ? "text-blue-400" : "text-white/70"} 
                     hover:text-blue-400 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
