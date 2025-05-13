import React from "react";
import { motion } from "framer-motion";
import Resume from "../../assets/resume.pdf";
import mamun from "../../assets/mamun.png";

const About = () => {
  return (
    <section className="md:pt-12 py-16 bg-black text-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-0">
        {/* Section Title */}
        <div className="text-center mb-8">
          <motion.h4
            className="text-4xl font-semibold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h4>
          <motion.h3
            className="text-lg sm:text-xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {"<-~-"} Some information about me! {"-~->"}
          </motion.h3>
        </div>

        {/* About Content */}
        <div className="container mx-auto  sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            className="flex "
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={mamun}
              alt="Md Mamun Hossain"
              className=" w-full max-w-[300px] md:max-w-[600px] h-[300px] md:h-[600px] object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="mt-6 mb-5 text-lg text-gray-300 text-justify md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Hello! I’m Md Mamun Hossain, a 22-year-old aspiring web developer with a deep passion for technology and innovation. After completing my Higher Secondary Certificate (HSC), I immersed myself in the world of programming, where I discovered my enthusiasm for building responsive, user-centric web applications.  My journey began with curiosity, and over time, it has grown into a strong commitment to mastering web development. I love exploring new technologies, experimenting with code, and studying real-world projects to better understand how impactful digital solutions are crafted. I regularly follow modern trends in the frontend ecosystem and continuously strive to sharpen my skills in frameworks like React, Next.js, and Tailwind CSS, along with backend tools such as Node.js and MongoDB.  What truly drives me is the joy of problem-solving, the excitement of creating something from scratch, and the satisfaction of improving user experience through thoughtful design and clean code. I believe in lifelong learning, and every day, I aim to grow as a developer by learning from challenges, feedback, and inspiration around me.
            </motion.p>

            {/* Resume Button */}
            <div className="flex flex-col items-center sm:flex-row md:justify-start">
              <a
                href={Resume}
                download="Md_Mamun_Hossain_Resume.pdf"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded shadow transition duration-300"
              >
                📄 Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
