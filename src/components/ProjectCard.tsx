import React from 'react';
import type { Project } from '../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
  onMove: (projectId: string, direction: 'forward' | 'backward') => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onMove }) => {
  const { id, name, budget, roi, owner } = project;

  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-2">
      <h3 className="text-lg font-bold">{name}</h3>
      <p>Owner: {owner}</p>
      <p>Budget: ${budget}</p>
      <p>ROI: <span className={roi > 50 ? 'text-green-500' : roi > 20 ? 'text-yellow-500' : 'text-red-500'}>{roi}%</span></p>
      <div className="flex justify-between mt-2">
        <Button label="Back" onClick={() => onMove(id, 'backward')} className="bg-gray-300" />
        <Button label="Forward" onClick={() => onMove(id, 'forward')} className="bg-gray-300" />
      </div>
    </div>
  );
};

export default ProjectCard; 