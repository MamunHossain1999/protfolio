
import img from '../assets/IMG_20220905_124818.jpg';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 py-16 px-6 text-center">
      {/* Profile Photo */}
      <img
        src={img}
        alt="Profile Photo"
        className="w-32 h-32 rounded-full mb-6 shadow-lg transition-transform duration-500 transform hover:scale-110"
      />

      {/* Name and Designation */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-2 animate__animated animate__fadeIn animate__delay-1s">Hi, I'm Mamun</h1>
      <h2 className="text-2xl text-gray-600 mb-6 animate__animated animate__fadeIn animate__delay-1.2s">Frontend Developer</h2>

      {/* Resume Download Button */}
      <a
        href="/about.pdf" // Link to the PDF in the public directory
        download
        className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
      >
        Download Resume
      </a>

      {/* Social Links */}
      <div className="mt-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 mx-3 transition duration-300 transform hover:scale-110"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 mx-3 transition duration-300 transform hover:scale-110"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
