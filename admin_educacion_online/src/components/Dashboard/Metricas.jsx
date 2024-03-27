import React from "react";

const Metricas = () => {
  // Datos ficticios para las métricas
  const totalUsuarios = 1500;
  const cursosActivos = 35;
  const ingresosMensuales = "$20,000";

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">Estadísticas Clave</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Total de Usuarios</h3>
          <p className="text-gray-600">{totalUsuarios}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Cursos Activos</h3>
          <p className="text-gray-600">{cursosActivos}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Ingresos Mensuales</h3>
          <p className="text-gray-600">{ingresosMensuales}</p>
        </div>
      </div>
    </div>
  );
};

export default Metricas;
