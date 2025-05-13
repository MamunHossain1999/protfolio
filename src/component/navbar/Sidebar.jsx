import React from "react";
import { NavLink } from "react-router-dom";
import resume from "../../assets/resume.pdf";

const Sidebar = ({ onClose }) => {
  return (
    <div className="lg:hidden bg-orange-500 text-white px-6 py-4 space-y-4">
      {[
        { to: "/", label: "Home" },
        { to: "/skill", label: "Skills" },
        { to: "/projects", label: "Projects" },
        { to: "/services", label: "Services" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
      ].map(({ to, label }) => (
        <div key={label}>
          <NavLink
            to={to}
            onClick={() => {
              window.scrollTo({ top: 0 });
              onClose();
            }}
            className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide text-gray-900 transition-colors duration-200 text-lg"
                  : "font-medium tracking-wide text-gray-200 transition-colors duration-200 text-lg hover:text-gray-500"
              }
          >
            {label}
          </NavLink>
        </div>
      ))}
      <div>
        <a
          href={resume}
          download
            className="font-medium tracking-wide text-violet-500 text-lg transition-colors duration-200 hover:text-gray-700"
          onClick={onClose}
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
