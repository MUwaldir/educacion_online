// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div>
//           <a href="/" className="text-white text-2xl font-bold">Plataforma de Educación en Línea</a>
//         </div>
//         <div className="hidden lg:flex lg:items-center lg:justify-end">
//           <a href="/courses" className="text-white mr-4 hover:text-gray-400">Cursos</a>
//           <a href="/about" className="text-white mr-4 hover:text-gray-400">Acerca de</a>
//           <a href="/contact" className="text-white mr-4 hover:text-gray-400">Contacto</a>
//           <a href="/login" className="text-white mr-4 hover:text-gray-400">Iniciar Sesión</a>
//           <a href="/signup" className="text-white hover:text-gray-400">Registrarse</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// **************************************************
// **************************************************
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link para navegar entre páginas

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center ">
        <Link to="/" className="text-white text-2xl font-bold flex">
          {" "}
          EDUCACIÓN <span className="text-gray-100 mx-2"> SIGMA</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 rounded-md"
            viewBox="0 0 24 24"
          >
            {" "}
            <g>
              {" "}
              <path fill="white" d="M0 0h24v24H0z" />{" "}
              <path
                fillRule="nonzero"
                d="M14 20v-2.157c1.863-1.192 3.5-3.875 3.5-6.959 0-3.073-2-6.029-5.5-6.029s-5.5 2.956-5.5 6.03c0 3.083 1.637 5.766 3.5 6.958V20H3v-2h4.76C5.666 16.505 4 13.989 4 10.884 4 6.247 7.5 3 12 3s8 3.247 8 7.884c0 3.105-1.666 5.621-3.76 7.116H21v2h-7z"
              />{" "}
            </g>{" "}
          </svg>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-full bg-gray-900 overflow-auto z-50 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="container mx-auto pt-4">
            <Link
              to="/courses"
              onClick={toggleMenu}
              className="block text-white mb-4"
            >
              Cursos
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block text-white mb-4"
            >
              Acerca de
            </Link>
            {/* <Link to="/contact" onClick={toggleMenu} className="block text-white mb-4">Contacto</Link> */}
            <Link
              to="/login"
              onClick={toggleMenu}
              className="block text-white mb-4"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/signup"
              onClick={toggleMenu}
              className="block text-white"
            >
              Registrarse
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-end">
          <a href="/courses" className="text-white mr-4 hover:text-gray-400">
            Cursos
          </a>
          <a href="/about" className="text-white mr-4 hover:text-gray-400">
            Acerca de
          </a>
          {/* <a href="/contact" className="text-white mr-4 hover:text-gray-400">Contacto</a> */}
          <a href="/login" className="text-white mr-4 hover:text-gray-400">
            Iniciar Sesión
          </a>
          <a href="/signup" className="text-white hover:text-gray-400">
            Registrarse
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
