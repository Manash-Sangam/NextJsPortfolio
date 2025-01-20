import React from 'react';
import Image from 'next/image';

interface SkillProps {
  title: string;
  technologies: { name: string; imageUrl: string }[];
}

const Skill: React.FC<SkillProps> = ({ title, technologies }) => {
  return (
    <div className="skill p-4 bg-background rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={tech.imageUrl} alt={tech.name} width={64} height={64} className="rounded-lg" />
            <span className="mt-2 text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
