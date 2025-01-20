import React from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectProps {
  name: string;
  description: string;
  imageUrl: string;
  links: { url: string; label: string }[];
}

const Project: React.FC<ProjectProps> = ({ name, description, imageUrl, links }) => {
  return (
    <div className="project p-4 bg-background rounded-lg flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <Image src={imageUrl} alt={name} width={400} height={300} className="rounded-lg" />
      </div>
      <div className="md:w-1/2 md:pl-4 self-start">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-4 items-center leading-tight">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bold_text hover:underline flex items-center text-sm"
            >
              {link.label} <FaExternalLinkAlt className="ml-1" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
