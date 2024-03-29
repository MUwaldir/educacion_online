import React, { useState } from 'react';

const DetalleUsuario = ({ usuario }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...usuario });

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setEditedUser({ ...usuario }); // Reiniciar los cambios si se cancela la edición
  };

  const handleInputChange = (e, field) => {
    setEditedUser({ ...editedUser, [field]: e.target.value });
  };

  const handleSaveChanges = () => {
    // Aquí puedes agregar lógica para guardar los cambios, por ejemplo, enviarlos al servidor
    // setEditMode(false); // Puedes desactivar el modo de edición si los cambios se guardan con éxito
  };

  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Detalles del Usuario</h2>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Nombre:</label>
        {editMode ? (
          <input
            type="text"
            value={editedUser.nombre}
            onChange={(e) => handleInputChange(e, 'nombre')}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        ) : (
          <span>{usuario.nombre}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Apellido:</label>
        {editMode ? (
          <input
            type="text"
            value={editedUser.apellido}
            onChange={(e) => handleInputChange(e, 'apellido')}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        ) : (
          <span>{usuario.apellido}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Email:</label>
        {editMode ? (
          <input
            type="email"
            value={editedUser.email}
            onChange={(e) => handleInputChange(e, 'email')}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        ) : (
          <span>{usuario.email}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Rol:</label>
        {editMode ? (
          <select
            value={editedUser.rol}
            onChange={(e) => handleInputChange(e, 'rol')}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          >
            <option value="admin">Administrador</option>
            <option value="usuario">Usuario</option>
            <option value="editor">Editor</option>
          </select>
        ) : (
          <span>{usuario.rol}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Suspendido:</label>
        {editMode ? (
          <select
            value={editedUser.suspendido}
            onChange={(e) => handleInputChange(e, 'suspendido')}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          >
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
        ) : (
          <span>{usuario.suspendido ? 'Sí' : 'No'}</span>
        )}
      </div>
      <div>
        {editMode ? (
          <>
            <button
              onClick={handleSaveChanges}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mr-2"
            >
              Guardar Cambios
            </button>
            <button
              onClick={toggleEditMode}
              className="bg-gray-400 text-white font-semibold py-2 px-4 rounded-md"
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button
              onClick={toggleEditMode}
              className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md mr-2"
            >
              Editar
            </button>
           
          </>
        )}
      </div>
    </div>
  );
};

export default DetalleUsuario;
