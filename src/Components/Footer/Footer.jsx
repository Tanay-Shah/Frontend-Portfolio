import React from "react";
import { Link, useLocation } from "react-router";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const location = useLocation();
  const shouldHideFooter = location.pathname === "/game";

  if (shouldHideFooter) return null;

  return (
    <footer className="w-full bg-slate-950 border-t border-white/10 backdrop-blur py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex md:justify-between md:items-start">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-2xl font-extrabold text-slate-100 tracking-wide">
              Tanay Shah
            </Link>
            <p className="text-slate-400 mt-2 text-sm max-w-xs">
              Building modern web experiences with React, Tailwind and AI-powered workflows.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 text-sm">
            {/* Resources */}
            <div>
              <h3 className="text-slate-200 font-semibold mb-4 uppercase tracking-wide">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-blue-300 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-400 hover:text-blue-300 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-blue-300 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h3 className="text-slate-200 font-semibold mb-4 uppercase tracking-wide">
                Follow
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/Tanay-Shah"
                    target="_blank"
                    className="text-slate-400 hover:text-blue-300 transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/tanay001"
                    target="_blank"
                    className="text-slate-400 hover:text-blue-300 transition"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="text-slate-400 hover:text-blue-300 transition"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-slate-200 font-semibold mb-4 uppercase tracking-wide">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a className="text-slate-400 hover:text-blue-300 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-slate-400 hover:text-blue-300 transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Tanay Shah. All rights reserved.
          </span>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4 sm:mt-0 items-center">
            <a
              href="https://github.com/Tanay-Shah"
              target="_blank"
              className="text-slate-300 hover:text-white text-lg transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/tanay001"
              target="_blank"
              className="text-slate-300 hover:text-blue-400 text-lg transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-slate-300 hover:text-blue-300 text-lg transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#top"
              className="text-slate-300 hover:text-blue-300 text-lg transition"
            >
            Go to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}