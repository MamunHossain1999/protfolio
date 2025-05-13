import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Project Card Component
const ProjectCard = ({ project, onClick }) => (
  <motion.div
    className="w-full sm:w-1/2 lg:w-1/3 p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
          className="mt-3 text-blue-600 btn bg-orange-400 border-none text-base font-medium hover:bg-orange-500"
        >
          View Details
        </button>
      </div>
    </div>
  </motion.div>
);

// Project Modal Component
const ProjectModal = ({ project, onClose }) => (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-black hover:text-red-600 text-2xl"
        aria-label="Close Modal"
      >
        &times;
      </button>

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4"
      />

      {/* Title & Description */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{project.name}</h2>
      <p className="text-gray-700 mb-4 text-sm sm:text-base">{project.description}</p>

      {/* Details Section */}
      <div className="space-y-3 text-sm sm:text-base">
        <p>
          <strong className="text-gray-800">Main Tech Stack:</strong>{' '}
          <span className="text-gray-600">{project.techStack}</span>
        </p>
        <p>
          <strong className="text-gray-800">Challenges Faced:</strong>{' '}
          <span className="text-gray-600">{project.challenges}</span>
        </p>
        <p>
          <strong className="text-gray-800">Improvements Planned:</strong>{' '}
          <span className="text-gray-600">{project.improvements}</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row sm:justify-start gap-3 sm:gap-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700 transition text-center"
        >
          🔗 View Live
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white text-sm px-5 py-2 rounded hover:bg-gray-900 transition text-center"
        >
          💻 GitHub Repo
        </a>
      </div>
    </div>
  </motion.div>
);


// Main Projects Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: 'Project One',
      image: 'https://img.freepik.com/free-photo/merchant-giving-package-courier_482257-90451.jpg',
      description: 'Brief description of Project One.',
      techStack: 'Vue.js, Express.js, MongoDB, Tailwind CSS, React Router DOM',
      challenges: 'Challenges faced during Project One.',
      improvements: 'Planned improvements for Project One.',
      liveLink: 'https://foodsharing-96323.web.app',
      githubLink: 'https://github.com/programming-hero-web-course2/b10a11-client-side-MamunHossain1999',
    },
    {
      name: 'Project Two',
      image: 'https://img.freepik.com/free-vector/vector-banner-movie-time_107791-8496.jpg',
      description: 'Brief description of Project Two.',
      techStack: 'Vue.js, Express.js, MongoDB, Tailwind CSS, React Router DOM',
      challenges: 'Challenges faced during Project Two.',
      improvements: 'Planned improvements for Project Two.',
      liveLink: 'https://movie-portal-9cc54.web.app',
      githubLink: 'https://github.com/programming-hero-web-course2/b10-a10-client-side-MamunHossain1999',
    },
    {
      name: 'Project Three',
      image: 'https://img.freepik.com/free-vector/flat-people-taking-photos-monkey_23-2149012394.jpg',
      description: 'Brief description of Project Three.',
      techStack: 'Vue.js, Express.js, MongoDB, Tailwind CSS, React Router DOM',
      challenges: 'Challenges faced during Project Three.',
      improvements: 'Planned improvements for Project Three.',
      liveLink: 'https://eco-adventure-3a30f.web.app',
      githubLink: 'https://github.com/programming-hero-web-course1/b10-a9-authentication-MamunHossain1999',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
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

      {/* Modal */}
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
