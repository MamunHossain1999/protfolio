import React from "react";
import { Link, NavLink } from "react-router-dom";
import resume from "../../assets/resume.pdf";

const Navbar = () => {
  return (
    <div className="w-full py-6 mx-auto bg-orange-500 text-white sticky top-0 right-0">
      <div className="container mx-auto">
        <div className="relative container flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <span className="ml-2 text-2xl font-serif font-bold tracking-wide text-gray-100 uppercase">
              <span className="text-[#0dccf2] py-1"> M</span> M
              <span className="text-[#0dccf2] py-1"> H</span>
            </span>
          </Link>
          <ul className="lg:flex items-center gap-4 hidden">
            <li>
              <NavLink
                to="/"
                onClick={() => window.scrollTo({ top: 0 })}
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-[#0dccf2] transition-colors duration-200"
                    : "font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-[#0dccf2]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skill"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-[#0dccf2] transition-colors duration-200"
                    : "font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-[#0dccf2]"
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-[#0dccf2] transition-colors duration-200"
                    : "font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-[#0dccf2]"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-[#0dccf2] transition-colors duration-200"
                    : "font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-[#0dccf2]"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-[#0dccf2] transition-colors duration-200"
                    : "font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-[#0dccf2]"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-[#0dccf2] transition-colors duration-200"
                    : "font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-[#0dccf2]"
                }
              >
                Contact
              </NavLink>
            </li>

            {/* Link to Resume PDF */}
            <li>
              <a
                href={resume} // Use the imported resume PDF file here
                download
                className="font-medium tracking-wide text-[#0dccf2] transition-colors duration-200 hover:text-[#0dccf2]"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
