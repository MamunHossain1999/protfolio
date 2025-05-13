import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import resume from "../../assets/resume.pdf";
import Sidebar from "./Sidebar";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full py-6 bg-orange-500 text-white sticky top-0 z-50 ">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-1">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center">
          <span className=" text-2xl font-serif font-bold  text-gray-100 uppercase">
            <span className="text-[#0dccf2] py-1"> M</span> M
            <span className="text-[#0dccf2] py-1"> H</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="lg:flex items-center gap-4 hidden">
          {[
            { to: "/", label: "Home" },
            { to: "/skill", label: "Skills" },
            { to: "/projects", label: "Projects" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <li key={label}>
              <NavLink
                to={to}
                onClick={() => window.scrollTo({ top: 0 })}
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-gray-900 transition-colors duration-200 text-lg"
                    : "font-medium tracking-wide text-gray-200 transition-colors duration-200 text-lg hover:text-gray-500"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={resume}
              download
              className="font-medium tracking-wide text-violet-500 text-lg transition-colors duration-200 hover:text-gray-700"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white focus:outline-none pr-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div>
        {/* Mobile Sidebar (if open) */}
      {isOpen && (
        <Sidebar onClose={() => setIsOpen(false)} />
      )}
      </div>
    </div>
  );
};

export default Navbar;
