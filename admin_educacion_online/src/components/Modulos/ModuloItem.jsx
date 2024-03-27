import React from 'react';

const ModuloItem = ({ modulo, onSelect }) => {
    const handleEliminarModulo = (idmodulo) => {

    }
  return (
    <li className="bg-white rounded shadow p-4 mb-4">
      <h3 className="text-xl font-bold mb-2">{modulo.titulo}</h3>
      <p className="text-gray-600 mb-2">{modulo.contenido}</p>
      <button
        onClick={onSelect}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Editar
      </button>
      <button
        onClick={() => handleEliminarModulo(modulo.id)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Eliminar
      </button>
    </li>
  );
};

export default ModuloItem;
