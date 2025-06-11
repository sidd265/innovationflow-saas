import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import type { Patent } from '../types';

const mockPatents: Patent[] = [
  { id: '1', name: 'Patent A', filingDate: '2023-01-01', status: 'Pending', link: '#' },
  { id: '2', name: 'Patent B', filingDate: '2023-02-15', status: 'Approved', link: '#' },
  // Add more mock patents as needed
];

const Patents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatents = mockPatents.filter((patent) =>
    patent.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Patent Insights</h1>
        <input
          type="text"
          placeholder="Search patents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
        <table className="min-w-full bg-white rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Filing Date</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Link</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatents.map((patent) => (
              <tr key={patent.id} className="border-t hover:bg-gray-50">
                <td className="py-2 px-4">{patent.name}</td>
                <td className="py-2 px-4">{patent.filingDate}</td>
                <td className="py-2 px-4">{patent.status}</td>
                <td className="py-2 px-4">
                  <a href={patent.link} className="text-blue-500 hover:underline">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default Patents; 