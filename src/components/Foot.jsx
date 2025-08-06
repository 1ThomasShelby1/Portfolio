import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Foot = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; {new Date().getFullYear()} Rutik Bhamare. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="http://www.linkedin.com/in/rutik-bhamare-2a8a29247"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/1ThomasShelby1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/hrutik_bhamare?igsh=MXh1bGM0eHlqdHAxYw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://x.com/rutik_bhamare?t=6OmSYudBIzujuOA49WaBOA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
