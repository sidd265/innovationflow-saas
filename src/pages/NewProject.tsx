import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/ui/Button';

const NewProject: React.FC = () => {
  const [project, setProject] = useState({
    name: '',
    description: '',
    owner: '',
    budget: 0,
    roi: 0,
    stage: 'Idea',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Project saved:', project);
    // Save to mock data or in-memory state
  };

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">New Project</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Name</label>
            <input
              type="text"
              name="name"
              value={project.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Owner</label>
            <input
              type="text"
              name="owner"
              value={project.owner}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Budget</label>
            <input
              type="number"
              name="budget"
              value={project.budget}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">ROI %</label>
            <input
              type="number"
              name="roi"
              value={project.roi}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Stage</label>
            <select
              name="stage"
              value={project.stage}
              onChange={handleSelectChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Idea">Idea</option>
              <option value="Development">Development</option>
              <option value="Testing">Testing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <Button label="Save" onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" />
        </form>
      </div>
    </MainLayout>
  );
};

export default NewProject; 