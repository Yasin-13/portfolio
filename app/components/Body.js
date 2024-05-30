"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa"; // Import React Icon for Github

const Body = () => {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="h-screen text-center font-title text-7xl justify-center mt-60">
        <Typewriter
          words={["MOHAMED YASIN"]}
          loop={1} // Set loop to 1 to type the text only once
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />


<div>
        <p className="text-4xl text-white font-sans font-bold text-center">
          <Typewriter
            words={["developer/cyber-security enthusiast"]}
            loop={1} // Set loop to 1 to type the text only once
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        </div>
      
      <div className="text-center mt-8">
        <button
          onClick={scrollToProjects}
          className=" text-white px-6 py-2 rounded-md text-lg hover:bg-blue-700 transition duration-300"
        >
          Projects
        </button>
      </div>
      </div>
      
      <div id="projects" className="h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
          {[1, 2, 3, 4].map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={`https://via.placeholder.com/300?text=Project+${project}`}
                alt={`Project ${project}`}
                className="w-full h-full object-cover"
              />
              <a
                href="https://github.com" // Replace with your project link
                className="absolute inset-0 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaGithub className="text-white text-5xl" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
