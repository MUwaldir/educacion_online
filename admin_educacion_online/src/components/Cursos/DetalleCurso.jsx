import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BorrarMessage,
  deleteCurso,
  fetchCursos,
  updateCurso,
} from "../../redux/actions/actions";
import ModalRespuesta from "../Layout/ModalRespuesta";
import { useEffect } from "react";

const DetalleCurso = ({ curso, setSelectedCurso }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [Modal, setModal] = useState(false);

  const [editedCurso, setEditedCurso] = useState({ ...curso });

  const messageDeleteCurso = useSelector((state) => state.messageDeleteCurso);
  const messageUpdateCurso = useSelector((state) => state.messageUpdateCurso);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCurso((prevCurso) => ({
      ...prevCurso,
      [name]: value,
    }));
  };
  const onEdit = (id) => {
    setEditMode(true);
  };

  const onDelete = (id) => {
    dispatch(deleteCurso(id));
  };

  const onclose = () => {
    setModal(false);
    setSelectedCurso(null);
    dispatch(BorrarMessage());
    dispatch(fetchCursos());
  };
  const handleSaveChanges = () => {
    console.log(editedCurso);
    dispatch(updateCurso(editedCurso));
    // Aquí puedes enviar los cambios al servidor o actualizar el estado del curso
    // Ejemplo: onUpdate(editedCurso);
    setEditMode(false);
  };

  useEffect(() => {
    if (messageDeleteCurso) {
      setModal(true);
    }
  }, [messageDeleteCurso]);
  useEffect(() => {
    if (messageUpdateCurso) {
      setModal(true);
    }
  }, [messageUpdateCurso]);
  console.log(curso);
  return (
    <div>
      {/* Encabezado */}
      <h2 className="text-2xl font-bold mb-4">Detalles del Curso</h2>

      {/* Detalles del curso */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {editMode ? (
              <input
                type="text"
                name="titulo"
                value={editedCurso.titulo}
                onChange={handleInputChange}
                className="w-full border rounded-md p-1"
              />
            ) : (
              curso.titulo
            )}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {editMode ? (
              <textarea
                name="descripcion"
                value={editedCurso.descripcion}
                onChange={handleInputChange}
                className="w-full border rounded-md p-1"
              />
            ) : (
              curso.descripcion
            )}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Duración</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {editMode ? (
                  <input
                    type="text"
                    name="duracion"
                    value={editedCurso.duracion}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-1"
                  />
                ) : (
                  `${curso.duracion} horas`
                )}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Nivel de Dificultad
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {editMode ? (
                  <input
                    type="text"
                    name="nivel"
                    value={editedCurso.nivel}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-1"
                  />
                ) : (
                  curso.nivel
                )}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Requisitos</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {editMode ? (
                  <input
                    type="text"
                    name="requisitos"
                    value={editedCurso.requisitos}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-1"
                  />
                ) : (
                  curso.requisitos
                )}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Objetivos</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {editMode ? (
                  <input
                    type="text"
                    name="objetivos"
                    value={editedCurso.objetivos}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-1"
                  />
                ) : (
                  curso.objetivos
                )}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Categoria</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {editMode ? (
                  <input
                    type="text"
                    name="categoria"
                    value={editedCurso.categoria}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-1"
                  />
                ) : (
                  curso.categoria
                )}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Estado del curso
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {editMode ? (
                  <input
                    type="text"
                    name="estado"
                    value={editedCurso.estado}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-1"
                  />
                ) : (
                  curso.estado
                )}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Costo del curso
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {editMode ? (
                  <input
                    type="text"
                    name="costo"
                    value={editedCurso.costo}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-1"
                  />
                ) : (
                  curso.costo
                )}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Destacado</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {editMode ? (
                  <input
                    type="text"
                    name="destacado"
                    value={editedCurso.destacado}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-1"
                  />
                ) : curso.destacado ? (
                  "true"
                ) : (
                  "false"
                )}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Imagen</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {editMode ? (
                  <input
                    type="text"
                    name="image"
                    value={editedCurso.image}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-1"
                  />
                ) : (
                  curso.image
                )}
              </dd>
            </div>

            {/* Agregar más detalles del curso según sea necesario */}
          </dl>
        </div>
      </div>

      {/* Botones de edición y eliminación */}
      <div className="mt-4 flex items-center">
        {editMode ? (
          <>
            <button
              onClick={handleSaveChanges}
              className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
            >
              Guardar
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="bg-gray-400 text-white py-2 px-4 rounded mr-2"
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onEdit(curso.id)}
              className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(curso.id)}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Eliminar
            </button>
          </>
        )}
      </div>
      {Modal && (
        <ModalRespuesta
          isOpen={Modal}
          onClose={onclose}
          message={messageDeleteCurso}
        />
      )}
      {Modal && (
        <ModalRespuesta
          isOpen={Modal}
          onClose={onclose}
          message={messageUpdateCurso}
        />
      )}
    </div>
  );
};

export default DetalleCurso;
