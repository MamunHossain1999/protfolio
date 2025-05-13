import React, { useState } from 'react';
import { motion } from 'framer-motion';
const ProjectCard = ({ project, onClick }) => (
    <motion.div
      className="w-full sm:w-1/2 lg:w-1/3 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
          <p className="text-gray-600">{project.description}</p>
          <button
            onClick={() => onClick(project)}
            className="mt-2 text-blue-500 hover:underline"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
  

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-lg w-11/12 sm:w-3/4 lg:w-1/2 p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.name}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <p className="text-gray-600 mb-4"><strong>Main Tech Stack:</strong> {project.techStack}</p>
        <p className="text-gray-600 mb-4"><strong>Challenges Faced:</strong> {project.challenges}</p>
        <p className="text-gray-600 mb-4"><strong>Improvements Planned:</strong> {project.improvements}</p>
        <p className="text-gray-600 mb-4"><strong>Live Link:</strong> <a href={project.liveLink} className="text-blue-500 hover:underline">{project.liveLink}</a></p>
        <p className="text-gray-600 mb-4"><strong>GitHub Link:</strong> <a href={project.githubLink} className="text-blue-500 hover:underline">{project.githubLink}</a></p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
  

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: 'Project One',
      image: 'https://img.freepik.com/free-photo/merchant-giving-package-courier_482257-90451.jpg?ga=GA1.1.1062747228.1733425109&semt=ais_hybrid',
      description: 'Brief description of Project One.',
      techStack: 'Vue.js, Express.js, mongodb, tailwindcss, react-router-dom, ',
      challenges: 'Challenges faced during Project One.',
      improvements: 'Planned improvements for Project One.',
      liveLink: 'https://foodsharing-96323.web.app',
      githubLink: 'https://github.com/programming-hero-web-course2/b10a11-client-side-MamunHossain1999',
    },
    {
      name: 'Project Two',
      image: 'https://img.freepik.com/free-vector/vector-banner-movie-time_107791-8496.jpg?ga=GA1.1.1062747228.1733425109&semt=ais_hybrid',
      description: 'Brief description of Project Two.',
      techStack: 'Vue.js, Express.js, mongodb, tailwindcss, react-router-dom, ',
      challenges: 'Challenges faced during Project Two.',
      improvements: 'Planned improvements for Project Two.',
      liveLink: 'https://movie-portal-9cc54.web.app',
      githubLink: 'https://github.com/programming-hero-web-course2/b10-a10-client-side-MamunHossain1999',
    },
    {
      name: 'Project Three',
      image: 'https://img.freepik.com/free-vector/flat-people-taking-photos-monkey_23-2149012394.jpg?ga=GA1.1.1062747228.1733425109&semt=ais_hybrid',
      description: 'Brief description of Project Three.',
      techStack: 'Vue.js, Express.js, mongodb, tailwindcss, react-router-dom, ',
      challenges: 'Challenges faced during Project Three.',
      improvements: 'Planned improvements for Project Three.',
      liveLink: 'https://eco-adventure-3a30f.web.app',
      githubLink: 'https://github.com/programming-hero-web-course1/b10-a9-authentication-MamunHossain1999',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">My Projects</h2>
        <div className="flex flex-wrap -mx-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
