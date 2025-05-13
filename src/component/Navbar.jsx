import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // State to toggle the menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-black"
        }
      >
        <li>
          <a>home</a>
        </li>
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-black"
        }
      >
        <li>
          <a>About Me</a>
        </li>
      </NavLink>
      <NavLink
        to={"/skill"}
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-black"
        }
      >
        <li>
          <a>Skills</a>
        </li>
      </NavLink>
      <NavLink
        to={"/project"}
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-black"
        }
      >
        <li>
          <a>Projects</a>
        </li>
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-black"
        }
      >
        <li>
          <a>Contact</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar text-black sticky top-0 bg-gray-200">
      {/* Navbar Start - Logo and Hamburger Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* Dropdown Menu for Mobile */}
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {links}
          </ul>
        </div>
        {/* Logo */}
        <a className="btn btn-ghost text-2xl font-semibold text-gradient bg-clip-text">
          Md Mamun Hossain
        </a>
      </div>

      {/* Navbar end - Links for Desktop */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
