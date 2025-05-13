import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 text-black py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-gray-400">
              Hi, I'm a passionate frontend developer. I love crafting beautiful and functional websites. Let's work together!
            </p>
          </div>
          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-400">About Me</a></li>
              <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
              <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          {/* Social Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          © 2025 Mamun's Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
