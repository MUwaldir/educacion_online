import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 h-16  ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold">
          Dashboard del Administrador
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/cursos"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Cursos
            </Link>
          </li>
          <li>
            <Link
              to="/modulos"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Módulos
            </Link>
          </li>
          <li>
            <Link
              to="/usuarios"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Usuarios
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Iniciar sesión
            </Link>
          </li>
          {/* Agrega más opciones de navegación según sea necesario */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
