import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import ModalRespuesta from "../components/Layout/ModalRespuesta";
import {
  createUser,
  deleteUsuarioSelecionado,
  getUsers,
  selectUsuario,
} from "../redux/actions/actions";
import DetalleUsuario from "../components/Usuarios/DetalleUsuario";
import { useNavigate } from "react-router-dom";
// import { getUsers, createUser, deleteUser, suspendUser } from '../api'; // Importa las funciones para interactuar con la API

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio"),
  apellido: yup.string().required("El apellido es obligatorio"),
  email: yup
    .string()
    .email("Ingrese un email válido")
    .required("El email es obligatorio"),
  rol: yup.string().required("Seleccione un rol"),
});

const AdminUsuarios = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [usuarios, setUsuarios] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    rol: "",
  });
  const [errores, setErrores] = useState({});
  const [Modal, setModal] = useState(false);
  const usuarios = useSelector((state) => state.usuarios);
  const messageCreateUser = useSelector((state) => state.messageCreateUser);
  const usuarioSeleccionado = useSelector((state) => state.usuarioSeleccionado);

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = async () => {
    try {
      await dispatch(getUsers());
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  const handleCrearUsuario = async () => {
    console.log(nuevoUsuario);

    await schema.validate(nuevoUsuario, { abortEarly: false });
    dispatch(createUser(nuevoUsuario));
  };
  const handleOnClose = () => {
    setModal(false);
  };
  useEffect(() => {
    if (messageCreateUser) {
      setModal(true);
      obtenerUsuarios();
      setNuevoUsuario({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        rol: "",
      });
      setErrores({});
    }
  }, [messageCreateUser]);

  const handleEliminarUsuario = async (id) => {
    try {
      await deleteUser(id);
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  const handleSuspenderUsuario = async (id) => {
    try {
      await suspendUser(id);
      obtenerUsuarios();
    } catch (error) {
      console.error("Error al suspender usuario:", error);
    }
  };
  console.log(usuarios);
  const handleFormCrearUsuario = () => {
    dispatch(deleteUsuarioSelecionado());
    setOpenForm(!openForm);
  };

  const handleDetalleUsuario = (id) => {
    dispatch(selectUsuario(id));
  };

  const handleEliminarUsuarioSeleccionado = () => {
    dispatch(deleteUsuarioSelecionado());
  };

  return (
    <div className="flex flex-row overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/5 h-screen bg-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-4">Administración</h2>
        <button
          onClick={handleFormCrearUsuario}
          className={`bg-${
            openForm ? "red" : "blue"
          }-500 text-white font-semibold py-2 px-4 rounded-md mb-4 hover:bg-${
            openForm ? "red" : "blue"
          }-600 transition-colors`}
        >
          {openForm ? "Cerrar Formulario" : "Crear Usuario"}
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md mb-4 hover:bg-gray-600 transition-colors"
        >
          Regresar a Dashboard
        </button>
        <button
          onClick={handleEliminarUsuarioSeleccionado}
          className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md mb-4 hover:bg-gray-600 transition-colors"
        >
          ver usuarios
        </button>
        <p className="text-sm text-gray-600">
          Bienvenido, administrador. En esta sección puedes crear nuevos
          usuarios y gestionar la información de los usuarios existentes. Si
          tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en
          contacto con el equipo de soporte.
        </p>
      </div>

      {/* Contenido principal */}
      <div className="w-4/5 p-4 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Administración de Usuarios</h1>
        {/* Aquí va el resto del contenido */}
        {!usuarioSeleccionado ? (
          <div>
            {openForm && (
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-lg font-bold mb-4">Crear Nuevo Usuario</h2>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={nuevoUsuario.nombre}
                    onChange={(e) =>
                      setNuevoUsuario({
                        ...nuevoUsuario,
                        nombre: e.target.value,
                      })
                    }
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                  />
                  {errores.nombre && (
                    <p className="text-red-500 text-xs italic">
                      {errores.nombre}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Apellido"
                    value={nuevoUsuario.apellido}
                    onChange={(e) =>
                      setNuevoUsuario({
                        ...nuevoUsuario,
                        apellido: e.target.value,
                      })
                    }
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                  />
                  {errores.apellido && (
                    <p className="text-red-500 text-xs italic">
                      {errores.apellido}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={nuevoUsuario.email}
                    onChange={(e) =>
                      setNuevoUsuario({
                        ...nuevoUsuario,
                        email: e.target.value,
                      })
                    }
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                  />
                  {errores.email && (
                    <p className="text-red-500 text-xs italic">
                      {errores.email}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    value={nuevoUsuario.password}
                    onChange={(e) =>
                      setNuevoUsuario({
                        ...nuevoUsuario,
                        password: e.target.value,
                      })
                    }
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div className="mb-4">
                  <select
                    value={nuevoUsuario.rol}
                    onChange={(e) =>
                      setNuevoUsuario({ ...nuevoUsuario, rol: e.target.value })
                    }
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                  >
                    <option value="">Seleccionar Rol</option>
                    <option value="admin">Administrador</option>
                    <option value="usuario">Usuario</option>
                    <option value="editor">Editor</option>
                  </select>
                  {errores.rol && (
                    <p className="text-red-500 text-xs italic">{errores.rol}</p>
                  )}
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleCrearUsuario}
                >
                  Crear Usuario
                </button>
              </div>
            )}
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {/* <th className="border border-gray-300 px-4 py-2">ID</th> */}
                  <th className="border border-gray-300 px-4 py-2">Nombre</th>
                  <th className="border border-gray-300 px-4 py-2">Apellido</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Rol</th>
                  <th className="border border-gray-300 px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    {/* <td className="border border-gray-300 px-4 py-2">
                      {usuario.id}
                    </td> */}
                    <td className="border border-gray-300 px-4 py-2">
                      {usuario.nombre}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {usuario.apellido}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {usuario.email}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 space-x-2 ">
                      {usuario.rol}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex justify-around">
                        <button
                          onClick={() => handleDetalleUsuario(usuario.id)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Detalle
                        </button>
                        <button
                          onClick={() => handleEliminarUsuario(usuario.id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Eliminar
                        </button>
                        <button
                          onClick={() => handleSuspenderUsuario(usuario.id)}
                          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Suspender
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <DetalleUsuario usuario={usuarioSeleccionado} />
        )}
      </div>
      {messageCreateUser && (
        <ModalRespuesta
          isOpen={Modal}
          onClose={handleOnClose}
          message={messageCreateUser}
        />
      )}
    </div>
  );
};

export default AdminUsuarios;
