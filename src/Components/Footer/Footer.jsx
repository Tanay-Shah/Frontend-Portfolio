import React from "react";
import { Link, useLocation } from "react-router";

export default function Footer() {
  const location = useLocation();
  const shouldHideFooter = location.pathname === "/game";

  if (shouldHideFooter) return null;

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-black text-white">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8 md:py-10">
        <div className="md:flex md:justify-between md:items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold tracking-wide">CodePlayground</span>
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3 text-sm font-medium">
            <div>
              <h2 className="mb-4 text-white font-semibold uppercase">Resources</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline hover:text-gray-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline hover:text-gray-200">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-white font-semibold uppercase">Follow Us</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline hover:text-gray-200"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:underline hover:text-gray-200">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-white font-semibold uppercase">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:underline hover:text-gray-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline hover:text-gray-200">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200/30 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-100 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a href="#" className="hover:underline">
              Tanay Shah
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-200 hover:text-white">
              <i className="fab fa-facebook-f"></i>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-200 hover:text-white">
              <i className="fab fa-discord"></i>
              <span className="sr-only">Discord</span>
            </a>
            <a href="#" className="text-gray-200 hover:text-white">
              <i className="fab fa-github"></i>
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-gray-200 hover:text-white">
              <i className="fab fa-twitter"></i>
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
