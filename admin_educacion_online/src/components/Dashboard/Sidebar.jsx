import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBook, FaChalkboardTeacher, FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="text-white">
      <nav className="p-4">
        <ul>
          <li className="mb-2 py-4">
            <Link
              to="/dashboard"
              className="ml-4 text-lg font-semibold hover:text-gray-400 flex items-center"
            >
              <FaHome className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-2 py-4">
            <Link
              to="/admin/cursos"
              className="block text-gray-300 hover:text-white flex items-center"
            >
              <FaBook className="mr-2" /> Gestionar Cursos
            </Link>
          </li>
          <li className="mb-2 py-4">
            <Link
              to="/admin/modulos"
              className="block text-gray-300 hover:text-white flex items-center"
            >
              <FaChalkboardTeacher className="mr-2" /> Gestionar Módulos
            </Link>
          </li>
          <li className="mb-2 py-4">
            <Link
              to="/admin/usuarios"
              className="block text-gray-300 hover:text-white flex items-center"
            >
              <FaUser className="mr-2" /> Gestionar Usuarios
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
