import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'CCTV crime detection',
    description: 'DL model to detect violence activities using videos and webcam',
    imageUrl: '/11.jpeg',
    githubUrl: 'https://github.com/Yasin-13',
  },
  {
    id: 2,
    title: 'Result Management System',
    description: 'Result management for colleges using MERN stack',
    imageUrl: '/Picture1.jpg',

    githubUrl: 'https://github.com/Yasin-13',
  },
  {
    id: 3,
    title: 'BridgeTheGap',
    description: 'Ai based learning platform',
    imageUrl: '/12.png',
    githubUrl: 'https://github.com/Yasin-13',
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden group"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 transform group-hover:scale-105"
              />
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                
              </a>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
