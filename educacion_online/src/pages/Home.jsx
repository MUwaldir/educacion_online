import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  // const dispatch = useDispatch();
  const importantCourses = useSelector((state) => state.cursos);
  // const handleLesson = () => {
  //   dispatch(eliminarlesson());
  // };
  console.log(importantCourses)
  return (
    <div className="container mx-auto pt-8 pb-8 mt-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center font-serif italic">
        Plataforma de Educación en Línea
      </h1>
      <p className="text-lg text-center mb-4">
        Explora nuestros cursos y comienza tu viaje de aprendizaje hoy mismo.
      </p>
      <h2 className="text-2xl font-bold mb-4">Cursos Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {importantCourses.map((course) => (
          <Link
            key={course.id}
            to={`courses/course/${course.id}`}
            // onClick={handleLesson}
            className=""
          >
            <div className="bg-blue-800 flex flex-col justify-between shadow-lg rounded-md mx-4 h-72 hover:bg-blue-600 hover:scale-105 ">
              <div>
                <img
                  src={course.image}
                  alt={course.titulo}
                  className="w-full h-36 rounded-md mb-2"
                />
              </div>
              <div className="text-center flex flex-col justify-between  px-4">
                <h3 className="text-white text-sm  font-bold   ">
                  {course.titulo}
                </h3>
                <div className="flex justify-between text-white mt-4">
                  <p>{course.nivel}</p>
                  <p className="text-lg md:text-xl bg-black p-1 rounded-md">
                    {course.costo} $
                  </p>
                </div>
              </div>
              <div className="bg-blue-950 rounded-b-md p-2 ">
                <p className="text-white">{course.categoria}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
