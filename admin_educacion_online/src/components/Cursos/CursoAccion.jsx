import React from 'react';

const CursoAccion = () => {
  const handleEditarCurso = () => {
    // Lógica para editar el curso
  };

  const handleEliminarCurso = () => {
    // Lógica para eliminar el curso
  };


  return (
    <div className="bg-white p-4 rounded shadow">
      {/* <h2 className="text-lg font-bold mb-4">Acciones de Curso</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       
        <button onClick={handleEditarCurso} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Editar Curso
        </button>
        <button onClick={handleEliminarCurso} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Eliminar Curso
        </button>
      </div>
      {/* Otros botones de acciones según tus necesidades */}
    </div>
  );
};

export default CursoAccion;
