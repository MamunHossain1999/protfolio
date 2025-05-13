import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// Frontend Assets
import html from "../../assets/html.webp";
import css from "../../assets/csss.png";
import javascript from "../../assets/javascript.png";
import Bootstrap from "../../assets/Bootstrap.png";
import Tailwind from "../../assets/Tailwind_CSS_Logo.svg.png";
import ReactJS from "../../assets/React-icon.svg.png";
import firebase from "../../assets/firebase.png";
import redux from "../../assets/redux.png";
import nextjs from "../../assets/nextjs.webp";
import typescript from "../../assets/typescript.png";
import moongose from "../../assets/mongoose.jpg";

// Backend Assets
import node from "../../assets/nodejspng.png";
import express from "../../assets/express-js.png";
import mongodb from "../../assets/mongodb.png";
import prisma from "../../assets/Postgresql_elephant.svg.png";
import restapi from "../../assets/docker.webp";
import jwt from "../../assets/GraphQL_Logo.svg.png";

const frontendSkills = [
  { img: html, id: "html", label: "HTML5" },
  { img: css, id: "css", label: "CSS3" },
  { img: javascript, id: "javascript", label: "JavaScript" },
  { img: Bootstrap, id: "bootstrap", label: "Bootstrap" },
  { img: Tailwind, id: "tailwind", label: "Tailwind CSS" },
  { img: ReactJS, id: "reactjs", label: "React JS" },
  { img: redux, id: "redux", label: "Redux" },
  { img: firebase, id: "firebase", label: "Firebase" },
  { img: nextjs, id: "nextjs", label: "Next.js" },
  { img: typescript, id: "typescript", label: "TypeScript" },
];

const backendSkills = [
  { img: node, id: "node", label: "Node JS" },
  { img: express, id: "express", label: "Express JS" },
  { img: mongodb, id: "mongodb", label: "MongoDB" },
  { img: prisma, id: "prisma", label: "Prisma" },
  { img: restapi, id: "restapi", label: "REST API" },
  { img: jwt, id: "jwt", label: "JWT Auth" },
  { img: moongose, id: "moongose", label: "Mongoose" },
];

const circleStyle = {
  position: "relative",
  width: "360px",
  height: "360px",
};

const rotatingStyle = {
  animation: "spin 30s linear infinite",
};

const Skills = () => {
  const renderCircle = (skills) => {
    const radius = 160;
    const angleStep = (2 * Math.PI) / skills.length;

    return skills.map((skill, index) => {
      const angle = index * angleStep;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      return (
        <motion.div
          key={skill.id}
          data-tooltip-id="tooltip"
          data-tooltip-content={skill.label}
          className="absolute"
          style={{
            top: `calc(50% + ${y}px - 32px)`,
            left: `calc(50% + ${x}px - 32px)`,
          }}
        >
          <img
            src={skill.img}
            alt={skill.label}
            className="h-16 w-16 rounded-full hover:scale-110 transition-transform duration-300 shadow-md"
          />
        </motion.div>
      );
    });
  };

  return (
    <div className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white text-center -mb-[140px]">
      <h2 className="text-5xl font-bold mb-6 text-primary">My Skills</h2>
      <p className="text-lg text-gray-400 mb-16">
        {"<-~-"} Technologies I work with {"-~->"}
      </p>

      <Tooltip id="tooltip" place="bottom" className="z-50" />

      <div className="mt-52">
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-36 p-5 md:p-0 md:gap-96">
          {/* Frontend Circle */}
          <div>
            <h3 className="text-2xl font-semibold  text-blue-400">Frontend</h3>
            <div style={circleStyle} className="mx-auto">
              <motion.div style={rotatingStyle}>
                {renderCircle(frontendSkills)}
              </motion.div>
            </div>
          </div>

          {/* Backend Circle */}
          <div>
            <h3 className="text-2xl font-semibold  text-green-400">Backend</h3>
            <div style={circleStyle} className="mx-auto">
              <motion.div style={rotatingStyle}>
                {renderCircle(backendSkills)}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Skills;
