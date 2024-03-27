import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ModuloForm = ({ initialValues, onSubmit, courseId }) => {
  console.log(courseId);

  const validationSchema = Yup.object().shape({
    titulo: Yup.string().required("El título es requerido"),
    contenido: Yup.string().required("El contenido es requerido"),
    duracion: Yup.number().required("La duración es requerida"),
    recursos: Yup.array()
      .of(Yup.string().required("El recurso es requerido"))
      .required("Los recursos son requeridos"),
    videoid: Yup.string().required("El ID del video es requerido"),
    order: Yup.number().required("El orden es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      titulo: "",
      contenido: "",
      duracion: 0,
      recursos: [],
      videoid: "",
      order: 0,
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  // Efecto para restablecer los valores del formulario cuando cambian los initialValues
  useEffect(() => {
    formik.resetForm({ values: initialValues });
  }, [initialValues]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label htmlFor="titulo" className="block text-gray-700 font-bold mb-2">
          Título:
        </label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.titulo}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.titulo && formik.errors.titulo && (
          <div className="text-red-500 mt-1">{formik.errors.titulo}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="contenido" className="block font-semibold mb-1">
          Contenido:
        </label>
        <textarea
          id="contenido"
          name="contenido"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contenido}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        {formik.touched.contenido && formik.errors.contenido && (
          <div className="text-red-500 mt-1">{formik.errors.contenido}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="duracion" className="block font-semibold mb-1">
          Duración (en minutos):
        </label>
        <input
          type="number"
          id="duracion"
          name="duracion"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.duracion}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.duracion && formik.errors.duracion && (
          <div className="text-red-500 mt-1">{formik.errors.duracion}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="recursos" className="block font-semibold mb-1">
          Recursos:
        </label>
        <input
          type="text"
          id="recursos"
          name="recursos"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.recursos}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.recursos && formik.errors.recursos && (
          <div className="text-red-500 mt-1">{formik.errors.recursos}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="videoid" className="block font-semibold mb-1">
          Videoid:
        </label>
        <input
          type="text"
          id="videoid"
          name="videoid"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.videoid}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.videoid && formik.errors.videoid && (
          <div className="text-red-500 mt-1">{formik.errors.videoid}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="order" className="block font-semibold mb-1">
          Order:
        </label>
        <input
          type="number"
          id="order"
          name="order"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.order}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.order && formik.errors.order && (
          <div className="text-red-500 mt-1">{formik.errors.order}</div>
        )}
      </div>
      <p>{courseId}</p>
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded-md shadow-sm hover:bg-blue-500"
      >
        Guardar
      </button>
    </form>
  );
};

export default ModuloForm;
