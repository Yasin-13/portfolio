import React from 'react';
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";

const skills = [
  { name: 'JavaScript', level: 5 },
  { name: 'React', level: 4 },
  { name: 'Node.js', level: 4 },
  { name: 'Pentesting', level: 3 },
  { name: 'Networking', level: 3 }
];

const Skills = () => {
  return (
    <section>
      <div className="max-w-screen-xl h-1020 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl  bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent font-bold sm:text-4xl">SKILLS</h2>
            <p className="mt-4 font-bold text-2xl bg-gradient-to-r from-blue-700 to-indigo-900 bg-clip-text text-transparent text-gray-600">
              DEVELOPER / CYBERSECURITY
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <IoLogoJavascript size={24} />
              </span>
              <h2 className="mt-2 text-xl font-bold sm:text-2xl">JavaScript</h2>
            </a>
            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <FaPython size={24} />
              </span>
              <h2 className="mt-2 text-xl font-bold sm:text-2xl">Python</h2>
            </a>
            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <FaBug size={24} />
              </span>
              <h2 className="mt-2 text-xl font-bold sm:text-2xl">Bug-bounty</h2>
            </a>
            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <FaJava size={24} />
              </span>
              <h2 className="mt-2 text-xl font-bold sm:text-2xl">Java</h2>
            </a>
            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <FaReact size={24} />
              </span>
              <h2 className="mt-2 text-xl font-bold sm:text-2xl">React/Next</h2>
            </a>
            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <FaNetworkWired size={24} />
              </span>
              <h2 className="mt-2 text-xl font-bold sm:text-2xl">Networking</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
