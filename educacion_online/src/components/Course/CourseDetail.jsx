// CourseDetail.js
import React from "react";
import datalessons from "../../utils/dataLecciones";
import { useParams } from "react-router-dom";
import LessonList from "../Lesson/LessonList";
import { useState } from "react";
import YouTube from "react-youtube";
import LessonDetail2 from "../Lesson/LessonDetail2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCursoDetail } from "../../redux/actions/actions";
// import LessonDetail from "../Lesson/LessonDetail";

const CourseDetail = () => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.cursodetail);
  const lesson = useSelector((state) => state.selectlesson);
  // const courses = [
  //   {
  //     id: "c23a3ab6-1084-4aa3-9d30-7c9f99a9a7d9",
  //     title: "Curso de Matemáticas",
  //     image:
  //       "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     description: "Este curso cubre temas como álgebra, geometría y cálculo.",
  //     lessons: [
  //       {
  //         id: 1,
  //         title: "Lección 1 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },
  //       {
  //         id: 2,
  //         title: "Lección 2 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       {
  //         id: 3,
  //         title: "Lección 3 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       {
  //         id: 4,
  //         title: "Lección 4 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },
  //       {
  //         id: 5,
  //         title: "Lección 5 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       {
  //         id: 6,
  //         title: "Lección 6 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },

  //     ],
  //   },
  //   {
  //     id:"8e45eb77-9c8e-4f6e-b76c-bb6315f915df",
  //     title: "Curso de Ciencias",
  //     image:
  //       "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     description:
  //       "Este curso explora diversas disciplinas científicas, como física, química y biología.",
  //     lessons: [
  //       {
  //         id: 1,
  //         title: "Lección 1 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },
  //       {
  //         id: 2,
  //         title: "Lección 2 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       {
  //         id: 3,
  //         title: "Lección 3 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       {
  //         id: 4,
  //         title: "Lección 4 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },
  //       // Otras lecciones...
  //     ],
  //   },
  //   {
  //     id:"9c0b0371-b214-4e2f-9499-aa4c746b0ca8",
  //     title: "Curso de Historia",
  //     image:
  //       "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     description:
  //       "Este curso ofrece un recorrido por diferentes períodos y eventos históricos.",
  //     lessons: [
  //       {
  //         id: 1,
  //         title: "Lección 1 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },
  //       {
  //         id: 2,
  //         title: "Lección 2 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       {
  //         id: 3,
  //         title: "Lección 3 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       {
  //         id: 4,
  //         title: "Lección 4 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },
  //       // Otras lecciones...
  //     ],
  //   },
  //   {
  //     id: "34cd0722-5c02-4fe7-b459-5701e0e78c21",
  //     title: "Curso de Programación",
  //     image:
  //       "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     description:
  //       "Este curso enseña los fundamentos de la programación y el desarrollo de software.",
  //     lessons: [
  //       {
  //         id: 1,
  //         title: "Lección 1 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },
  //       {
  //         id: 2,
  //         title: "Lección 2 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       // Otras lecciones...
  //     ],
  //   },
  //   {
  //     id:"1d182d96-2fd5-4e87-b16d-92b0e71e2555",
  //     title: "Curso de Literatura",
  //     image:
  //       "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     description:
  //       "Este curso explora obras literarias destacadas y teorías literarias.",
  //     lessons: [
  //       {
  //         id: 1,
  //         title: "Lección 1 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },
  //       {
  //         id: 2,
  //         title: "Lección 2 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       // Otras lecciones...
  //     ],
  //   },
  //   {
  //     id:"90c8bd0a-a79c-47fa-ab1a-dfc36e42b09d",
  //     title: "Curso de Arte",
  //     image:
  //       "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     description:
  //       "Este curso abarca diferentes formas de arte, desde la pintura hasta la escultura.",
  //     lessons: [
  //       {
  //         id: 1,
  //         title: "Lección 1 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },
  //       {
  //         id: 2,
  //         title: "Lección 2 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       // Otras lecciones...
  //     ],
  //   },
  //   {
  //     id:"354d5afa-b805-4d82-b53e-eae446deed91",
  //     title: "Curso de Música",
  //     image:
  //       "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     description:
  //       "Este curso cubre aspectos teóricos y prácticos de la música, incluyendo composición e interpretación.",
  //     lessons: [
  //       {
  //         id: 1,
  //         title: "Lección 1 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },
  //       {
  //         id: 2,
  //         title: "Lección 2 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       // Otras lecciones...
  //     ],
  //   },
  //   {
  //     id:"b988af28-feff-46e9-bb1b-1cb452697007",
  //     title: "Curso de Idiomas",
  //     image:
  //       "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     description:
  //       "Este curso enseña diferentes idiomas, como inglés, español, francés, entre otros.",
  //     lessons: [
  //       {
  //         id: 1,
  //         title: "Lección 1 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },
  //       {
  //         id: 2,
  //         title: "Lección 2 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       // Otras lecciones...
  //     ],
  //   },
  //   {
  //     id: "cf09b48d-7eb4-4c6f-be36-8117ac5a8d99",
  //     title: "Curso de Economía",
  //     image:
  //       "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     description:
  //       "Este curso introduce conceptos económicos fundamentales y su aplicación en el mundo real.",
  //     lessons: [
  //       {
  //         id: 1,
  //         title: "Lección 1 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },
  //       {
  //         id: 2,
  //         title: "Lección 2 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       // Otras lecciones...
  //     ],
  //   },
  //   {
  //     id: "5d6af470-cf3b-405a-a77a-721fd85e7d36",
  //     title: "Curso de Filosofía",
  //     image:
  //       "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     description:
  //       "Este curso explora temas filosóficos como la ética, la metafísica y la lógica.",
  //     lessons: [
  //       {
  //         id: 1,
  //         title: "Lección 1 de Matemáticas",
  //         content: "Contenido de la lección 1 de Matemáticas",
  //         duration: "2 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  //       },
  //       {
  //         id: 2,
  //         title: "Lección 2 de Matemáticas",
  //         content: "Contenido de la lección 2 de Matemáticas",
  //         duration: "1.5 horas",
  //         videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  //       },
  //       // Otras lecciones...
  //     ],
  //   },
  // ];
  const { id } = useParams();
  // const [selectedLesson, setSelectedLesson] = useState(datalessons[0].id);
  // const [lesson, setLesson] = useState([]);

  // // const course = courses.find((c) => c.id === id);

  // const openLesson = (id) => {
  //   const lesson = datalessons.find((l) => l.id === parseInt(id));
  //   setLesson(lesson);
  //   setSelectedLesson(lesson.id)
  // };
  useEffect(() => {
    dispatch(getCursoDetail(id));
  }, []);
  console.log(course);
  return (
    <div className="flex flex-grow mt-16">
      {/* Barra lateral fija */}
      {course && (
        <div className="w-full">
          <div
            className="w-64 top-20 fixed left-0 z-50    text-black "
            style={{ backgroundColor: "#fff6ed" }}
          >
            <div className="p-2">
              <h3 className="text-xl font-semibold mb-2">Modulos</h3>
              <LessonList />
            </div>
          </div>

          {/* Contenido principal con scroll  */}
          <div className="flex-grow ml-64 overflow-y-auto pt-8">
            {lesson ? (
              <div>
                <LessonDetail2 />
              </div>
            ) : (
              <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                {/* Título del curso */}
                <h2 className="text-3xl  font-bold mb-4 px-6 py-4 bg-blue-500 text-white">
                  {course.titulo}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-4">
                  {/* Duración del curso */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Duración</h3>
                    <p>{course.duracion} semanas</p>
                  </div>

                  {/* Categoría del curso */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Categoría</h3>
                    <p>{course.categoria}</p>
                  </div>

                  {/* Nivel del curso */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nivel</h3>
                    <p>{course.nivel}</p>
                  </div>

                  {/* Requisitos del curso */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Requisitos</h3>
                    <p>{course.requisitos}</p>
                  </div>
                </div>

                {/* Descripción del curso */}
                <div className="px-6 py-4">
                  <h3 className="text-xl font-semibold mb-2">Descripción</h3>
                  <p className="text-justify">{course.descripcion}</p>
                </div>

                {/* Objetivos del curso */}
                <div className="px-6 py-4">
                  <h3 className="text-xl font-semibold mb-2">Objetivos</h3>
                  <p>{course.objetivos}</p>
                </div>

                {/* Imagen del curso */}
                <div className="px-6 py-4">
                  <img
                    src={course.image}
                    alt={course.titulo}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
