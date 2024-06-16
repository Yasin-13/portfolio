import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 right-0 w-full p-4 ">
      <div className="flex justify-end space-x-6">
        <a
          href="https://www.linkedin.com/in/mohamed-yasin-aaa502260/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-500"
        >
          <FaLinkedin size={34} className="sm:size-30" />
        </a>
        <a
          href="https://github.com/Yasin-13"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-400"
        >
          <FaGithub size={34} className="sm:size-30" />
        </a>
        <a
          href="https://www.instagram.com/yasin_md20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-pink-500"
        >
          <FaInstagram size={34} className="sm:size-30" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;