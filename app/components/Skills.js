import React from 'react';

const skills = [
  { name: 'JavaScript', level: 5 },
  { name: 'React', level: 4 },
  { name: 'Node.js', level: 4 },
  { name: 'Pentesting', level: 3 },
  { name: 'Networking', level: 3 }
];

const Skills = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <div className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{skill.name}</h3>
              <div className="flex justify-center items-center space-x-2">
                {[...Array(skill.level)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-4 bg-blue-500 rounded-full"
                  />
                ))}
                {[...Array(5 - skill.level)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-4 bg-gray-300 rounded-full"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
