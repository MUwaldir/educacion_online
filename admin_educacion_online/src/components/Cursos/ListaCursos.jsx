import React, { useState } from "react";
import CursosAcciones from "./CursoAccion";
import { useDispatch, useSelector } from "react-redux";
import { seleccionCurso } from "../../redux/actions/actions";
// import { cursos } from "../../utils/cursos";

const ListaCursos = () => {
  const dispatch = useDispatch();
  const cursos = useSelector((state) => state.cursos);
  const handleCursoSelection = (id) => {
    dispatch(seleccionCurso(id));
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
          {cursos.length > 0 && cursos.map((curso, index) => (
            <tr key={index} className="hover:bg-gray-100 cursor-pointer">
              <td
                className="px-4 py-2 border border-gray-300"
                onClick={() => handleCursoSelection(curso.id)}
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
