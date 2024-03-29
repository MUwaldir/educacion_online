import React, { useEffect, useState } from "react";
import ModuloItem from "./ModuloItem";
import ModuloForm from "./ModuloForm";

const ModulosList = ({ modulos, onSelectModulo }) => {
  const [crearModulo, setCrearModulo] = useState(false);


  const handleCrearModulo = () => {
    setCrearModulo(!crearModulo);
  };
  useEffect(() => {
    setCrearModulo(false)
  },[modulos])
  console.log(modulos)


  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Módulos</h2>
      <ul>
        {modulos.map((modulo, index) => (
          <ModuloItem
            key={index}
            modulo={modulo}
            onSelect={() => onSelectModulo(modulo)}
          />
        ))}
      </ul>
      {modulos.length > 0 && (
        <button onClick={() => handleCrearModulo()} type="button">
          Crear Módulo
        </button>
      )}
      {crearModulo && (
        <ModuloForm
          initialValues={{}}
          courseId={courseId}
        />
      )}
    </div>
  );
};

export default ModulosList;
