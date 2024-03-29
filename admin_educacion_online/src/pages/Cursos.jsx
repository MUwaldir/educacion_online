import React, { useState, useEffect } from "react";
// import { cursos } from "../utils/cursos";
import ListaCursos from "../components/Cursos/ListaCursos";
import DetalleCurso from "../components/Cursos/DetalleCurso";
import CursoAccion from "../components/Cursos/CursoAccion";
import { Link } from "react-router-dom";
import CursoForm from "../components/Cursos/CursoForm";
import {
  FaPlus,
  FaList,
  FaBars,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaHome,
} from "react-icons/fa"; // Importar los iconos de React Icons
import { useDispatch, useSelector } from "react-redux";
import { BorrarMessage, fetchCursos } from "../redux/actions/actions";

const Cursos = () => {
  const dispatch = useDispatch();
  const [selectedCurso, setSelectedCurso] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true); // Variable de estado para controlar la visibilidad del sidebar
  const [showCrearCursoForm, setShowCrearCursoForm] = useState(false);

  const cursos = useSelector((state) => state.cursos);
  const cursoSeleccionado = useSelector((state) => state.cursoseleccionado);
  //   const messageDeleteCurso = useSelector((state) => state.messageDeleteCurso);

  useEffect(() => {
    setSelectedCurso(cursoSeleccionado);
  }, [cursoSeleccionado]);

  const handleCrearCurso = () => {
    setShowCrearCursoForm(true);
    setSelectedCurso(null);
  };

  const handleVerCursos = () => {
    setSelectedCurso(null);
    setShowCrearCursoForm(false);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleOnCloseCreateCurso = () => {
    setShowCrearCursoForm(false);
    dispatch(fetchCursos());
    dispatch(BorrarMessage())
  };

  const navbarHeight = 60;
  console.log(cursos);
  console.log(selectedCurso);
  return (
    <div className="flex flex-grow relative overflow-hidden ">
      {/* Enlace con icono de inicio */}
      <div className="absolute  pt-4 ml-6   text-2xl">
        <Link
          to="/"
          className="text-black  hover:text-blue-600 font-bold focus:outline-none "
        >
          <FaHome />
        </Link>
      </div>

      {/* Sidebar */}

      <div
        className={`bg-gray-200 p-4 rounded-md transition-all pt-16 duration-300 ${
          showSidebar ? "w-1/5" : "w-20 "
        } flex flex-col justify-between`}
      >
        <div>
          <div
            className={`mb-4 flex ${
              showSidebar ? "justify-between" : "justify-center"
            } `}
          >
            <h2
              className={`text-lg font-semibold ${
                showSidebar ? "" : "sr-only"
              }`}
            >
              Opciones
            </h2>
            <button onClick={toggleSidebar} className="focus:outline-none">
              {showSidebar ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
            </button>
          </div>
          <ul>
            <li className="mb-2">
              <button
                onClick={handleCrearCurso}
                className={`text-blue-500 hover:text-blue-600 font-bold py-2 rounded focus:outline-none focus:shadow-outline w-full flex items-center ${
                  showSidebar ? "" : "justify-center"
                }`}
              >
                <FaPlus className="mr-2 text-black" />
                {showSidebar ? "Crear Nuevo Curso" : null}
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={handleVerCursos}
                className={`text-blue-500 hover:text-blue-600 font-bold py-2 rounded focus:outline-none focus:shadow-outline w-full flex items-center ${
                  showSidebar ? "" : "justify-center"
                }`}
              >
                <FaList className="mr-2 text-black" />
                {showSidebar ? "Ver CURSOS" : null}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Contenido principal */}
      <div
        className="w-full h-auto p-4 overflow-y-auto"
        style={{ maxHeight: `calc(100vh - ${navbarHeight}px)` }}
      >
        <h1 className="text-3xl font-bold mb-6">Gestionar Cursos</h1>
        {/* Mostrar el formulario de creación de curso si showCrearCursoForm es true */}
        {showCrearCursoForm && !selectedCurso && (
          <CursoForm handleOnCloseCreateCurso={handleOnCloseCreateCurso} />
        )}

        {/* Lista de cursos */}
        {!selectedCurso && !showCrearCursoForm && (
          <div>
            <ListaCursos
            //   cursos={cursos}
            //   setSelectedCurso={handleCursoSelection}
            />
          </div>
        )}

        {/* Detalle del curso seleccionado */}
        {selectedCurso && !showCrearCursoForm && (
          <div>
            <DetalleCurso
              curso={selectedCurso}
              setSelectedCurso={setSelectedCurso}
            />
            {/* <CursoAccion curso={selectedCurso} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cursos;
