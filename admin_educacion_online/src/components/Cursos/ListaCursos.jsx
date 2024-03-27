import React, { useState } from "react";
import CursosAcciones from "./CursoAccion";
import { cursos } from "../../utils/cursos";

const ListaCursos = ({setSelectedCurso}) => {

  const handleCursoSelection = (curso) => {
    setSelectedCurso(curso);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lista de Cursos</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">Título</th>
            <th className="px-4 py-2 border border-gray-300">Descripción</th>
            <th className="px-4 py-2 border border-gray-300">Duración</th>
            <th className="px-4 py-2 border border-gray-300">Nivel</th>
            <th className="px-4 py-2 border border-gray-300">Categoría</th>
           
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso, index) => (
            <tr key={index} className="hover:bg-gray-100 cursor-pointer">
              <td
                className="px-4 py-2 border border-gray-300"
                onClick={() => handleCursoSelection(curso)}
              >
                {curso.titulo}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {curso.descripcion}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {curso.duracion} horas
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {curso.nivel}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {curso.categoria}
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
};

export default ListaCursos;
