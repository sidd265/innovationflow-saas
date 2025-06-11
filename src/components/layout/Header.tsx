import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-blue-600 shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-white rounded-full mr-3"></div> {/* Logo placeholder */}
            <h1 className="text-white text-2xl font-bold">Innovation Pipeline Manager</h1>
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300 transition duration-300">Home</Link>
            <Link to="/projects" className="text-white hover:text-gray-300 transition duration-300">Projects</Link>
            <Link to="/dashboard" className="text-white hover:text-gray-300 transition duration-300">Dashboard</Link>
            <Link to="/patents" className="text-white hover:text-gray-300 transition duration-300">Patents</Link>
            <Link to="/executive" className="text-white hover:text-gray-300 transition duration-300">Executive View</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 