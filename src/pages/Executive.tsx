import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Executive: React.FC = () => {
  return (
    <MainLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Executive Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Summary Cards */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Total Projects</h2>
            <p className="text-2xl">10</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Average ROI</h2>
            <p className="text-2xl">35%</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Stage Breakdown</h2>
            {/* Placeholder for chart */}
            <div className="h-32 bg-gray-100"></div>
          </div>
        </div>
        {/* Export PDF Button */}
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Export PDF
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Executive; 