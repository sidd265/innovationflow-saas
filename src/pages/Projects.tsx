import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import ProjectCard from '../components/ui/ProjectCard';
import type { Project } from '../types';

const stages = ['Idea', 'Development', 'Testing', 'Completed'];

const initialProjects: Project[] = [
  { id: '1', name: 'Project Alpha', description: '', owner: 'Alice', budget: 10000, roi: 30, stage: 'Idea' },
  { id: '2', name: 'Project Beta', description: '', owner: 'Bob', budget: 20000, roi: 60, stage: 'Development' },
  // Add more mock projects as needed
];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState(initialProjects);

  const moveProject = (projectId: string, direction: 'forward' | 'backward') => {
    setProjects((prevProjects) =>
      prevProjects.map((project) => {
        if (project.id === projectId) {
          const currentIndex = stages.indexOf(project.stage);
          const newIndex = direction === 'forward' ? currentIndex + 1 : currentIndex - 1;
          if (newIndex >= 0 && newIndex < stages.length) {
            return { ...project, stage: stages[newIndex] as Project['stage'] };
          }
        }
        return project;
      })
    );
  };

  return (
    <MainLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Project Tracker</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map((stage) => (
            <div key={stage} className="bg-gray-100 p-2 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-2">{stage}</h2>
              {projects.filter((project) => project.stage === stage).map((project) => (
                <ProjectCard key={project.id} project={project} onMove={moveProject} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects; 