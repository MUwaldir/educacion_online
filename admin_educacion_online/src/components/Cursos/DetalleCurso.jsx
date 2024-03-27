import React from "react";

const DetalleCurso = ({ curso }) => {
  return (
    <div>
      {/* Encabezado */}
      <h2 className="text-2xl font-bold mb-4">Detalles del Curso</h2>
      
      {/* Detalles del curso */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {curso.titulo}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {curso.descripcion}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Duración</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {curso.duracion} horas
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Nivel de Dificultad
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {curso.nivel}
              </dd>
            </div>
            {/* Agregar más detalles del curso según sea necesario */}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DetalleCurso;
