import React from "react";
import { NavLink, Link } from "react-router";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="backdrop-blur bg-slate-950 border-b border-white/10 px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          
{/* Logo */}
<Link to="/" className="flex items-center gap-3">
  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-green-300 p-[2px] shadow-lg">
    <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center">
      <span className="text-blue-300 font-bold text-lg">TS</span>
    </div>
  </div>
            <span className="text-slate-100 font-bold text-xl tracking-tight hover:text-blue-400 transition">
              Portfolio
            </span>

</Link>


          {/* Right Buttons */}
          <div className="flex items-center lg:order-2 gap-3">
            <Link
              to="#"
              className="text-slate-200/90 hover:text-white border border-white/10 hover:border-blue-400 
                         font-medium rounded-md text-sm px-4 py-2 transition"
            >
              Log in
            </Link>

            <Link
              to="#"
              className="text-black font-semibold text-sm px-4 py-2 rounded-md 
                         bg-gradient-to-r from-blue-400 to-green-300 shadow-md
                         hover:opacity-95 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Nav Links */}
          <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 lg:p-0 ${
                      isActive ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 lg:p-0 ${
                      isActive ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 lg:p-0 ${
                      isActive ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
                    }`
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
