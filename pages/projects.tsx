import React from 'react';
import ProjectsGrid from '../components/ProjectsGrid';

export default function Projects() {
  return (
    <div className="project-container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <ProjectsGrid />
    </div>
  );
}