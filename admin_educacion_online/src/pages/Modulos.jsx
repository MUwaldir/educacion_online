import React, { useState } from "react";
import {
  FaArrowLeft,
  FaBackspace,
  FaBackward,
  FaBook,
  FaPlus,
  FaStepBackward,
} from "react-icons/fa"; // Importar íconos de Font Awesome
import ModulosList from "../components/Modulos/ModulosList";
import CrearModuloButton from "../components/Modulos/CrearModuloButton";
import ModuloForm from "../components/Modulos/ModuloForm";
import { cursos } from "../utils/cursos";
import { Link } from "react-router-dom";

const Modulos = () => {
  const [selectedCurso, setSelectedCurso] = useState(null);
  const [selectedModulo, setSelectedModulo] = useState(null);


  const [modulos, setModulos] = useState([]);

  const handleSelectCurso = (curso) => {
    setSelectedCurso(curso);
    setSelectedModulo(null); // Limpiar el módulo seleccionado al cambiar de curso
    setModulos(curso.lessons);
  };

  const handleSelectModulo = (modulo) => {
    setSelectedModulo(modulo);
    setCreateModulo(true);
  };
  const handleNuevoModulo = () => {
    setCreateModulo(true);
  };

  const handleCreateModulo = (nuevoModulo) => {
    // Lógica para crear un nuevo módulo
  };


  return (
    <div className="flex overflow-hidden">
      {/* Sidebar con lista de cursos o módulos */}
      <div className="w-1/4 bg-white shadow-md p-4">
        <h2 className="text-lg font-bold mb-4">Explorar Cursos</h2>
        {selectedModulo ? (
          <div>
            <button
              className="text-black mb-4  font-bold "
              onClick={() => setSelectedModulo(null)}
            >
              <FaArrowLeft className="inline mr-2" /> Volver a la lista de
              módulos
            </button>
            <ul className="list-inside list-disc">
              {modulos.map((m, i) => (
                <li
                  key={i}
                  className={`mb-2 cursor-pointer ${
                    selectedModulo === m
                      ? "bg-blue-100 text-blue-600 font-bold rounded-lg px-2 py-1"
                      : "text-gray-800"
                  }`}
                  onClick={() => setSelectedModulo(m)}
                >
                  <FaBook className="inline mr-2" />
                  {m.titulo}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <ul>
              {cursos.map((curso, i) => (
                <li
                  key={i}
                  onClick={() => handleSelectCurso(curso)}
                  className={`text-blue-500 rounded-md h-14 px-1 cursor-pointer hover:text-blue-600 mb-2 flex items-center ${
                    selectedCurso === curso
                      ? "bg-blue-100 text-blue-600 font-bold rounded-lg px-2 py-1"
                      : ""
                  }`}
                >
                  <FaBook className="inline mr-2" />
                  {curso.titulo}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Contenido principal */}
      <div className="flex-grow p-4 overflow-y-auto">
        {selectedModulo ? (
          <div>
            <h1 className="text-2xl text-black font-bold mb-4">
              {selectedModulo.titulo}
            </h1>
            <ModuloForm
              initialValues={selectedModulo}
              onSubmit={handleCreateModulo}
            />
          </div>
        ) : (
          <div>
            <ModulosList
              modulos={modulos}
              onSelectModulo={handleSelectModulo}
              
            />
            {/* {createModulo && (
              <ModuloForm
                initialValues={selectedModulo}
                onSubmit={handleCreateModulo}
              />
            )} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modulos;
