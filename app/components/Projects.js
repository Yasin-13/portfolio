import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is the description for project one.',
    imageUrl: '/11.jpeg',
    githubUrl: 'https://github.com/username/project-one',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is the description for project two.',
    imageUrl: '/11.jpeg',
    githubUrl: 'https://github.com/username/project-two',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is the description for project three.',
    imageUrl: '/11.jpeg',
    githubUrl: 'https://github.com/username/project-three',
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
