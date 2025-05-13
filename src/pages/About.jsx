import React from 'react';
import img from '../assets/csss.png'; 
const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
        
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">About Me</h2>
         {/* Left Section: Profile Photo */}
        <div className='w-full mx-auto my-4 justify-center flex'>
        <div className="flex-shrink-0 w-48 h-48 mb-6 lg:mb-0 lg:mr-8 ">
            <img
              src={img}
              alt="Md Mamun Hossain"
              className="w-full h-full object-cover rounded-full shadow-lg border-4 border-gray-300 justify-center"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
         
          {/* Right Section: Personal Information */}
          <div className="flex-1 ">
            {/* About Text */}
            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Hello! I’m <strong>Md Mamun Hossain</strong>, an experienced Frontend Developer with a passion for creating engaging and user-friendly web applications. I specialize in <strong>HTML</strong>, <strong>CSS</strong>, <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>React Router DOM</strong>, <strong>Firebase</strong>, <strong>JWT</strong>, <strong>Axios</strong>, <strong>TanStack Query</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>. I enjoy bringing designs to life through code.
              </p>
            </div>
            {/* Info List */}
            <ul className="text-lg text-gray-700 space-y-2">
              <li><strong>Age:</strong> 22</li>
              <li><strong>Residence:</strong> Panchgarh, Bangladesh</li>
              <li><strong>Address:</strong> Panchgarh, Bangladesh</li>
              <li><strong>Email:</strong> <a href="mailto:developermamun1999@gmail.com" className="text-blue-500 hover:underline">developermamun1999@gmail.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+8801795920956" className="text-blue-500 hover:underline">01795920956</a></li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mt-8">Educational Qualifications</h3>
            <ul className="text-lg text-gray-700 mt-4">
              <li><strong>Higher Secondary Certificate (HSC):</strong> Commers, Mofizar Rahaman College, Panchagarh, GPA: 4.00</li>
              <li><strong>Secondary School Certificate (SSC):</strong> Computer Science, Panchagarh technical school and College, Panchagarh</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mt-8">Training Courses</h3>
            <ul className="text-lg text-gray-700 mt-4">
      
              <li><strong>Front-End Development Course:</strong> Online course at Programming-hero</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
