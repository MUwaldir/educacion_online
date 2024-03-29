import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { BorrarMessage, crearCurso } from "../../redux/actions/actions";
import ModalRespuesta from "../Layout/ModalRespuesta";

const CursoForm = ({ handleOnCloseCreateCurso }) => {
  const dispatch = useDispatch();
  const [Modal, setModal] = useState(false);
  const messageCreateCurso = useSelector((state) => state.messageCreateCurso);
  const initialValues = {
    titulo: "",
    descripcion: "",
    duracion: "",
    nivel: "",
    categoria: "",
    requisitos: "",
    objetivos: "",
    image: "",
    costo: "",
    destacado: false,
    estado: "pago",
    lessons: [
      {
        titulo: "",
        contenido: "",
        duracion: "",
        recursos: [],
        videoid: "",
        order: 1,
      },
    ],
  };

  const validationSchema = Yup.object().shape({
    titulo: Yup.string().required("El título es requerido"),
    descripcion: Yup.string().required("La descripción es requerida"),
    duracion: Yup.number().required("La duración es requerida"),
    nivel: Yup.string().required("El nivel es requerido"),
    categoria: Yup.string().required("La categoría es requerida"),
    requisitos: Yup.string().required("Los requisitos son requeridos"),
    objetivos: Yup.string().required("Los objetivos son requeridos"),
    image: Yup.string().required("La URL de la imagen es requerida"),
    costo: Yup.number().required("El costo es requerido"),
    lessons: Yup.array().of(
      Yup.object().shape({
        titulo: Yup.string().required("El título del módulo es requerido"),
        contenido: Yup.string().required(
          "El contenido del módulo es requerido"
        ),
        duracion: Yup.number().required("La duración del módulo es requerida"),
        recursos: Yup.array()
          .of(Yup.string())
          .required("Los recursos son requeridos"),
        videoid: Yup.string().required("El ID del video es requerido"),
        order: Yup.number().required("El orden del módulo es requerido"),
      })
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(crearCurso(values));
      console.log("Valores del formulario:", values);
      // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP, guardarlos en la base de datos, etc.
    },
  });
  const handleAddModule = () => {
    formik.setValues({
      ...formik.values,
      lessons: [
        ...formik.values.lessons,
        {
          titulo: "",
          contenido: "",
          duracion: "",
          recursos: [],
          videoid: "",
          order: formik.values.lessons.length + 1,
        },
      ],
    });
  };

  const handleRemoveModule = (index) => {
    formik.setValues({
      ...formik.values,
      lessons: formik.values.lessons.filter((_, i) => i !== index),
    });
  };

  const onClose = () => {
    setModal(false);
    handleOnCloseCreateCurso()
    dispatch(BorrarMessage());
  };

  useEffect(() => {
    if(messageCreateCurso){
        
        setModal(true);
    }
  }, [messageCreateCurso]);
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-lg mx-auto flex-grow  "
      >
        <div className="mb-4">
          <label htmlFor="titulo" className="block font-semibold mb-1">
            Título:
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.titulo}
            className={`w-full border rounded py-2 px-3 ${
              formik.touched.titulo && formik.errors.titulo
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.titulo && formik.errors.titulo && (
            <div className="text-red-500 mt-1">{formik.errors.titulo}</div>
          )}
        </div>
        {/* Repite este patrón para los otros campos del formulario */}
        <div className="mb-4">
          <label htmlFor="descripcion" className="block font-semibold mb-1">
            Descripción:
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.descripcion}
            className={`w-full border rounded py-2 px-3 ${
              formik.touched.descripcion && formik.errors.descripcion
                ? "border-red-500"
                : "border-gray-300"
            }`}
          ></textarea>
          {formik.touched.descripcion && formik.errors.descripcion && (
            <div className="text-red-500 mt-1">{formik.errors.descripcion}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="duracion" className="block font-semibold mb-1">
            Duración (en horas):
          </label>
          <input
            type="number"
            id="duracion"
            name="duracion"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.duracion}
            className={`w-full border rounded py-2 px-3 ${
              formik.touched.duracion && formik.errors.duracion
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.duracion && formik.errors.duracion && (
            <div className="text-red-500 mt-1">{formik.errors.duracion}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="nivel" className="block font-semibold mb-1">
            Nivel:
          </label>
          <input
            type="text"
            id="nivel"
            name="nivel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nivel}
            className={`w-full border rounded py-2 px-3 ${
              formik.touched.nivel && formik.errors.nivel
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.nivel && formik.errors.nivel && (
            <div className="text-red-500 mt-1">{formik.errors.nivel}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="categoria" className="block font-semibold mb-1">
            Categoría:
          </label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.categoria}
            className={`w-full border rounded py-2 px-3 ${
              formik.touched.categoria && formik.errors.categoria
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.categoria && formik.errors.categoria && (
            <div className="text-red-500 mt-1">{formik.errors.categoria}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="requisitos" className="block font-semibold mb-1">
            Requisitos:
          </label>
          <input
            type="text"
            id="requisitos"
            name="requisitos"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.requisitos}
            className={`w-full border rounded py-2 px-3 ${
              formik.touched.requisitos && formik.errors.requisitos
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.requisitos && formik.errors.requisitos && (
            <div className="text-red-500 mt-1">{formik.errors.requisitos}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="objetivos" className="block font-semibold mb-1">
            Objetivos:
          </label>
          <input
            type="text"
            id="objetivos"
            name="objetivos"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetivos}
            className={`w-full border rounded py-2 px-3 ${
              formik.touched.objetivos && formik.errors.objetivos
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.objetivos && formik.errors.objetivos && (
            <div className="text-red-500 mt-1">{formik.errors.objetivos}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block font-semibold mb-1">
            URL de la Imagen:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            className={`w-full border rounded py-2 px-3 ${
              formik.touched.image && formik.errors.image
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.image && formik.errors.image && (
            <div className="text-red-500 mt-1">{formik.errors.image}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="costo" className="block font-semibold mb-1">
            Costo:
          </label>
          <input
            type="number"
            id="costo"
            name="costo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.costo}
            className={`w-full border rounded py-2 px-3 ${
              formik.touched.costo && formik.errors.costo
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.costo && formik.errors.costo && (
            <div className="text-red-500 mt-1">{formik.errors.costo}</div>
          )}
        </div>

        {formik.values.lessons.map((lesson, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Módulo {index + 1}</h2>
            <div className="mb-4">
              <label
                htmlFor={`titulo-${index}`}
                className="block font-semibold mb-1"
              >
                Título:
              </label>
              <input
                type="text"
                id={`titulo-${index}`}
                name={`lessons[${index}].titulo`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lessons[index].titulo}
                className={`w-full border rounded py-2 px-3 ${
                  formik.touched.lessons &&
                  formik.touched.lessons[index] &&
                  formik.errors.lessons &&
                  formik.errors.lessons[index]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.lessons &&
                formik.touched.lessons[index] &&
                formik.errors.lessons &&
                formik.errors.lessons[index] && (
                  <div className="text-red-500 mt-1">
                    {formik.errors.lessons[index].titulo}
                  </div>
                )}
            </div>

            <div className="mb-4">
              <label
                htmlFor={`contenido-${index}`}
                className="block font-semibold mb-1"
              >
                Contenido:
              </label>
              <textarea
                id={`contenido-${index}`}
                name={`lessons[${index}].contenido`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lessons[index].contenido}
                className={`w-full border rounded py-2 px-3 ${
                  formik.touched.lessons &&
                  formik.touched.lessons[index] &&
                  formik.errors.lessons &&
                  formik.errors.lessons[index]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                rows="4"
              />
              {formik.touched.lessons &&
                formik.touched.lessons[index] &&
                formik.errors.lessons &&
                formik.errors.lessons[index] && (
                  <div className="text-red-500 mt-1">
                    {formik.errors.lessons[index].contenido}
                  </div>
                )}
            </div>

            <div className="mb-4">
              <label
                htmlFor={`duracion-${index}`}
                className="block font-semibold mb-1"
              >
                Duración (en minutos):
              </label>
              <input
                type="number"
                id={`duracion-${index}`}
                name={`lessons[${index}].duracion`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lessons[index].duracion}
                className={`w-full border rounded py-2 px-3 ${
                  formik.touched.lessons &&
                  formik.touched.lessons[index] &&
                  formik.errors.lessons &&
                  formik.errors.lessons[index]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.lessons &&
                formik.touched.lessons[index] &&
                formik.errors.lessons &&
                formik.errors.lessons[index] && (
                  <div className="text-red-500 mt-1">
                    {formik.errors.lessons[index].duracion}
                  </div>
                )}
            </div>
            {/* <div className="mb-4">
            <label
              htmlFor={`recursos-${index}`}
              className="block font-semibold mb-1"
            >
              Recursos:
            </label>
            <input
              type="text"
              id={`recursos-${index}`}
              name={`lessons[${index}].recursos`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lessons[index].recursos}
              className={`w-full border rounded py-2 px-3 ${
                formik.touched.lessons &&
                formik.touched.lessons[index] &&
                formik.errors.lessons &&
                formik.errors.lessons[index]
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.lessons &&
              formik.touched.lessons[index] &&
              formik.errors.lessons &&
              formik.errors.lessons[index] && (
                <div className="text-red-500 mt-1">
                  {formik.errors.lessons[index].recursos}
                </div>
              )}
          </div> */}
            <div className="mb-4">
              <label
                htmlFor={`recursos-${index}`}
                className="block font-semibold mb-1"
              >
                Recursos:
              </label>
              <input
                type="file"
                id={`recursos-${index}`}
                name={`lessons[${index}].recursos`}
                onChange={(event) => {
                  const files = Array.from(event.target.files);
                  // Obtener los archivos actuales
                  const currentFiles =
                    formik.values.lessons[index].recursos || [];
                  // Concatenar los nuevos archivos con los actuales
                  const newFiles = [...currentFiles, ...files];
                  // Establecer el nuevo array de archivos en el estado de Formik
                  formik.setFieldValue(`lessons[${index}].recursos`, newFiles);
                }}
                onBlur={formik.handleBlur}
                multiple
                className={`w-full border rounded py-2 px-3 ${
                  formik.touched.lessons &&
                  formik.touched.lessons[index] &&
                  formik.errors.lessons &&
                  formik.errors.lessons[index]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.lessons &&
                formik.touched.lessons[index] &&
                formik.errors.lessons &&
                formik.errors.lessons[index] && (
                  <div className="text-red-500 mt-1">
                    {formik.errors.lessons[index].recursos}
                  </div>
                )}
            </div>

            <div className="mb-4">
              <label
                htmlFor={`videoid-${index}`}
                className="block font-semibold mb-1"
              >
                Videoid:
              </label>
              <input
                type="text"
                id={`videoid-${index}`}
                name={`lessons[${index}].videoid`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lessons[index].videoid}
                className={`w-full border rounded py-2 px-3 ${
                  formik.touched.lessons &&
                  formik.touched.lessons[index] &&
                  formik.errors.lessons &&
                  formik.errors.lessons[index]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.lessons &&
                formik.touched.lessons[index] &&
                formik.errors.lessons &&
                formik.errors.lessons[index] && (
                  <div className="text-red-500 mt-1">
                    {formik.errors.lessons[index].videoid}
                  </div>
                )}
            </div>

            <input
              type="hidden"
              id={`order-${index}`}
              name={`lessons[${index}].order`}
              value={index + 1}
            />

            {/* Agregar más campos según tus necesidades para recursos, videoid, etc. */}

            <button
              type="button"
              onClick={() => handleRemoveModule(index)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Eliminar Módulo
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddModule}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Agregar Módulo
        </button>

        {/* Agrega aquí los demás campos del formulario */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Crear Curso
        </button>
      </form>
      {Modal && (
        <ModalRespuesta
          isOpen={Modal}
          onClose={onClose}
          message={messageCreateCurso}
        />
      )}
    </div>
  );
};

export default CursoForm;
