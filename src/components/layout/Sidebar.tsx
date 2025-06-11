import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-full fixed">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <nav className="space-y-2">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'block py-2 px-4 bg-blue-700 rounded transition duration-300' : 'block py-2 px-4 hover:bg-gray-700 rounded transition duration-300'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'block py-2 px-4 bg-blue-700 rounded transition duration-300' : 'block py-2 px-4 hover:bg-gray-700 rounded transition duration-300'
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/patents"
            className={({ isActive }) =>
              isActive ? 'block py-2 px-4 bg-blue-700 rounded transition duration-300' : 'block py-2 px-4 hover:bg-gray-700 rounded transition duration-300'
            }
          >
            Patents
          </NavLink>
          <NavLink
            to="/executive"
            className={({ isActive }) =>
              isActive ? 'block py-2 px-4 bg-blue-700 rounded transition duration-300' : 'block py-2 px-4 hover:bg-gray-700 rounded transition duration-300'
            }
          >
            Executive View
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 