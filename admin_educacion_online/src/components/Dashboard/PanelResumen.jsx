import React from "react";

const PanelResumen = () => {
  // Datos ficticios para el resumen de la plataforma
  const totalCursos = 50;
  const totalUsuarios = 2000;
  const cursosDestacados = 10;
  const ingresosAnuales = "$100,000";

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">Resumen de la Plataforma</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Total de Cursos</h3>
          <p className="text-gray-600">{totalCursos}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Total de Usuarios</h3>
          <p className="text-gray-600">{totalUsuarios}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Cursos Destacados</h3>
          <p className="text-gray-600">{cursosDestacados}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Ingresos Anuales</h3>
          <p className="text-gray-600">{ingresosAnuales}</p>
        </div>
      </div>
    </div>
  );
};

export default PanelResumen;
