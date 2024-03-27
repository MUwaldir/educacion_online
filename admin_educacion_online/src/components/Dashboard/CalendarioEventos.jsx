import React from "react";

const CalendarioEventos = () => {
  // Lista de eventos ficticios para modo de desarrollo
  const eventos = [
    {
      id: 1,
      titulo: "Reunión de Planificación de Cursos",
      descripcion: "Discusión sobre los cursos a desarrollar este trimestre.",
      fecha: "2024-04-10",
      hora: "10:00 AM",
      lugar: "Oficina Principal",
    },
    {
      id: 2,
      titulo: "Lanzamiento del Curso de Programación Avanzada",
      descripcion: "Anuncio y presentación del nuevo curso.",
      fecha: "2024-04-15",
      hora: "11:30 AM",
      lugar: "Plataforma en Línea",
    },
    {
      id: 3,
      titulo: "Sesión de Capacitación para Instructores",
      descripcion: "Entrenamiento sobre las nuevas herramientas de la plataforma.",
      fecha: "2024-04-20",
      hora: "9:00 AM",
      lugar: "Sala de Capacitación",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Calendario de Eventos</h2>
      <div className="space-y-4">
        {eventos.map((evento) => (
          <div key={evento.id} className="border border-gray-300 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-1">{evento.titulo}</h3>
            <p className="text-sm text-gray-600 mb-1">{evento.descripcion}</p>
            <p className="text-xs text-gray-500 mb-1">Fecha: {evento.fecha}</p>
            <p className="text-xs text-gray-500">Hora: {evento.hora}</p>
            <p className="text-xs text-gray-500">Lugar: {evento.lugar}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarioEventos;
