import React from 'react';
import Skill from './Skill';
import skillsData from '../data/skillsData';

const SkillsGrid: React.FC = () => {
  return (
    <div className="skills-grid-container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <Skill
            key={index}
            title={skill.title}
            technologies={skill.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
