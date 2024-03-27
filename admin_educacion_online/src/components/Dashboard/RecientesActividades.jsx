import React from "react";

const RecientesActividades = () => {
  // Datos ficticios de actividades recientes
  const actividades = [
    {
      id: 1,
      usuario: "Juan Perez",
      accion: "Creó el curso 'Introducción a React'",
      fecha: "2024-03-25",
    },
    {
      id: 2,
      usuario: "María López",
      accion: "Actualizó la descripción del curso 'Python Avanzado'",
      fecha: "2024-03-24",
    },
    {
      id: 3,
      usuario: "Carlos González",
      accion: "Añadió una nueva lección al curso 'JavaScript Básico'",
      fecha: "2024-03-23",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">Actividad Reciente</h2>
      <div>
        {actividades.map((actividad) => (
          <div key={actividad.id} className="mb-4">
            <p className="text-gray-600 mb-1">{actividad.fecha}</p>
            <p className="text-lg font-semibold">{actividad.usuario}</p>
            <p className="text-gray-600">{actividad.accion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecientesActividades;
