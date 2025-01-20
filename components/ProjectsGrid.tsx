import React from 'react';
import Project from './Project';
import projectsData from '../data/projectsData';

const ProjectsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projectsData.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          imageUrl={project.imageUrl}
          links={project.links}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
