import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    // Simulate successful form submission
    console.log("Form submitted!");
    toast.success("Message sent successfully!");
    e.target.reset();

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="bg-gray-800 pb-1">
      <motion.section
        className="md:pt-12 pt-20 mb-12 text-white"
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-5 sm:px-0 md:px-0">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-4xl font-semibold text-white text-center mb-4">
              Contact With Me
            </h4>
            <h3 className="font-semibold text-lg sm:text-xl mb-4 text-center text-gray-400">
              {"<-~-"} If you have any queries? {"-~->"}
            </h3>
          </motion.div>

          {/* Contact Form and Info */}
          <div className="pt-6 grid md:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <form
                ref={form}
                onSubmit={sendEmail}
                className="rounded-lg shadow-lg bg-gray-800 p-6"
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 mb-4 bg-[#1a1919] border border-gray-700 rounded text-gray-200 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 mb-4 bg-[#1a1919] border border-gray-700 rounded text-gray-200 focus:outline-none"
                  required
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message..."
                  className="w-full px-4 py-3 mb-4 bg-[#1a1919] border border-gray-700 rounded text-gray-200 focus:outline-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded transition-all duration-300"
                >
                  Submit
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-wrap gap-6 mt-5">
                {[
                  {
                    icon: <MdEmail />,
                    title: "Email",
                    text: "developermamun1999@gmail.com",
                  },
                  {
                    icon: <BsTelephoneFill />,
                    title: "Phone Number",
                    text: "+880 1795920956",
                  },
                  {
                    icon: <BsLinkedin />,
                    title: "LinkedIn",
                    text: "Linkedin Profile",
                    link: "https://www.linkedin.com/in/md-ripas-ali-b42a01257/",
                  },
                  {
                    icon: <MdLocationOn />,
                    title: "Location",
                    text: "Panchagarh, Rajshahi, Bangladesh",
                  },
                ].map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="w-full sm:w-6/12 flex items-start"
                  >
                    <div className="p-4 rounded-md shadow-md bg-orange-400 h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-3xl sm:text-4xl"
                        >
                          {info.icon}
                        </a>
                      ) : (
                        <span className="text-white text-3xl sm:text-4xl">
                          {info.icon}
                        </span>
                      )}
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-white mb-1">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:underline"
                        >
                          {info.text}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.text}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
