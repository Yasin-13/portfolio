"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa"; // Import React Icon for Github
import code from "@/public/11.jpeg";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";

const projectsData = [
  {
    title: "CCTv crime",
    githubLink: "https://github.com",
  },
  {
    title: "Project 2",
    githubLink: "https://github.com",
  },
  {
    title: "Project 3",
    githubLink: "https://github.com",
  },
  {
    title: "Project 4",
    githubLink: "https://github.com",
  },
];

const Body = () => {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects1 = () => {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects2 = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden">
      <div className="h-screen w-screen text-center font-title text-6xl justify-center mt-60 mx-auto">
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
          <p className="text-4xl  text-black font-sans font-bold text-center">
            <Typewriter
              words={["Developer/cyber-security enthusiast"]}
              loop={1} // Set loop to 1 to type the text only once
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>
        <div className="text-center mt-5 ">
          <button
            onClick={scrollToProjects}
            className="text-black  hover:text-white px-6 font-sans font-bold py-2 rounded-md text-lg hover:bg-black transition duration-300"
          >
            Projects
          </button>
          <button
            onClick={scrollToProjects1}
            className="text-black hover:text-white px-6 font-sans font-bold py-2 rounded-md text-lg hover:bg-black transition duration-300"
          >
            Skills
          </button>
          <button
            onClick={scrollToProjects2}
            className="text-black hover:text-white px-6 font-sans font-bold py-2 rounded-md text-lg hover:bg-black transition duration-300"
          >
            Contact
          </button>
        </div>
      </div>

      <div id="projects" className="h-screen  flex justify-center items-center">
        <Projects />
      
      


      </div>

      <div id="skills" className="h-screen w-screen flex justify-center items-center">
        <Skills />
      </div>
      <div id="contact" className="h-screen w-screen flex justify-center items-center">
        <Contact />
      </div>
    </div>
  );
};

export default Body;
