import React from 'react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface SidebarLayoutProps {
  children: ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav>
          <ul className="space-y-2">
            <li><Link to="/new-project" className="hover:text-blue-400">New Project</Link></li>
            <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
            <li><Link to="/patents" className="hover:text-blue-400">Patents</Link></li>
            <li><Link to="/executive" className="hover:text-blue-400">Executive</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 bg-white p-4">
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout; 