import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-3 gap-8">
         
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Hiumi Mihinadi</h2>
            <p className="text-gray-400">
              BSc IT Undergraduate | Web & Software Development Enthusiast
            </p>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-green-400" /> 
              <a href="mailto:hiumimihinadi@gmail.com" className="hover:underline">
                hiumimihinadi@gmail.com
              </a>
            </p>
            <p className="flex items-center mb-2">
              <FaPhone className="mr-2 text-green-400" /> +94 70 307 6334
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-green-400" /> 
              Pallewela, Western Province, Sri Lanka
            </p>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Hiumi112688"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl">
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/share/1GAwvKGEXa/?mibextid=wwXIfr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl">
                <FaFacebook/>
              </a>
              <a
                href="https://www.instagram.com/@_hiu_mi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl">
                <FaInstagram/>
              </a>
            </div>
          </div>
        </div>

        
        <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} Hiumi Mihinadi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
