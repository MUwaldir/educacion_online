// CourseDetail.js
import React from "react";
import datalessons from "../../utils/dataLecciones";
import { useParams } from "react-router-dom";
import LessonList from "../Lesson/LessonList";
import { useState } from "react";
import YouTube from "react-youtube";
import LessonDetail2 from "../Lesson/LessonDetail2";
import { useEffect } from "react";
// import LessonDetail from "../Lesson/LessonDetail";

const CourseDetail = () => {
  const courses = [
    {
      id: 1,
      title: "Curso de Matemáticas",
      image:
        "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Este curso cubre temas como álgebra, geometría y cálculo.",
      lessons: [
        {
          id: 1,
          title: "Lección 1 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        {
          id: 2,
          title: "Lección 2 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        {
          id: 3,
          title: "Lección 3 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        {
          id: 4,
          title: "Lección 4 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        {
          id: 5,
          title: "Lección 5 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        {
          id: 6,
          title: "Lección 6 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        // Otras lecciones...
      ],
    },
    {
      id: 2,
      title: "Curso de Ciencias",
      image:
        "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Este curso explora diversas disciplinas científicas, como física, química y biología.",
      lessons: [
        {
          id: 1,
          title: "Lección 1 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        {
          id: 2,
          title: "Lección 2 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        {
          id: 3,
          title: "Lección 3 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        {
          id: 4,
          title: "Lección 4 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        // Otras lecciones...
      ],
    },
    {
      id: 3,
      title: "Curso de Historia",
      image:
        "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Este curso ofrece un recorrido por diferentes períodos y eventos históricos.",
      lessons: [
        {
          id: 1,
          title: "Lección 1 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        {
          id: 2,
          title: "Lección 2 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        {
          id: 3,
          title: "Lección 3 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        {
          id: 4,
          title: "Lección 4 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        // Otras lecciones...
      ],
    },
    {
      id: 4,
      title: "Curso de Programación",
      image:
        "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Este curso enseña los fundamentos de la programación y el desarrollo de software.",
      lessons: [
        {
          id: 1,
          title: "Lección 1 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        {
          id: 2,
          title: "Lección 2 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        // Otras lecciones...
      ],
    },
    {
      id: 5,
      title: "Curso de Literatura",
      image:
        "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Este curso explora obras literarias destacadas y teorías literarias.",
      lessons: [
        {
          id: 1,
          title: "Lección 1 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        {
          id: 2,
          title: "Lección 2 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        // Otras lecciones...
      ],
    },
    {
      id: 6,
      title: "Curso de Arte",
      image:
        "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Este curso abarca diferentes formas de arte, desde la pintura hasta la escultura.",
      lessons: [
        {
          id: 1,
          title: "Lección 1 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        {
          id: 2,
          title: "Lección 2 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        // Otras lecciones...
      ],
    },
    {
      id: 7,
      title: "Curso de Música",
      image:
        "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Este curso cubre aspectos teóricos y prácticos de la música, incluyendo composición e interpretación.",
      lessons: [
        {
          id: 1,
          title: "Lección 1 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        {
          id: 2,
          title: "Lección 2 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        // Otras lecciones...
      ],
    },
    {
      id: 8,
      title: "Curso de Idiomas",
      image:
        "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Este curso enseña diferentes idiomas, como inglés, español, francés, entre otros.",
      lessons: [
        {
          id: 1,
          title: "Lección 1 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        {
          id: 2,
          title: "Lección 2 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        // Otras lecciones...
      ],
    },
    {
      id: 9,
      title: "Curso de Economía",
      image:
        "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Este curso introduce conceptos económicos fundamentales y su aplicación en el mundo real.",
      lessons: [
        {
          id: 1,
          title: "Lección 1 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        {
          id: 2,
          title: "Lección 2 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        // Otras lecciones...
      ],
    },
    {
      id: 10,
      title: "Curso de Filosofía",
      image:
        "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Este curso explora temas filosóficos como la ética, la metafísica y la lógica.",
      lessons: [
        {
          id: 1,
          title: "Lección 1 de Matemáticas",
          content: "Contenido de la lección 1 de Matemáticas",
          duration: "2 horas",
          videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
        },
        {
          id: 2,
          title: "Lección 2 de Matemáticas",
          content: "Contenido de la lección 2 de Matemáticas",
          duration: "1.5 horas",
          videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
        },
        // Otras lecciones...
      ],
    },
  ];
  const [selectedLesson, setSelectedLesson] = useState(datalessons[0].id);
  const [lesson, setLesson] = useState(datalessons[0]);

  const { id } = useParams();

  const course = courses.find((c) => c.id === parseInt(id));

  const openLesson = (id) => {
    const lesson = datalessons.find((l) => l.id === parseInt(id));
    setLesson(lesson);
    setSelectedLesson(lesson.id)
  };

  return (

    <div className="flex flex-grow mt-4">
      {/* Barra lateral fija */}
      <div className="w-64 top-20 fixed left-0 z-50    text-black " style={{backgroundColor : '#fff6ed'}}>
        <div className="p-2">
          <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
          <p className="text-black mb-4 text-justify">
            {course.description}
          </p>
          <h3 className="text-xl font-semibold mb-2">Clases</h3>
          <LessonList lessons={course.lessons} openLesson={openLesson} selectedLesson = {selectedLesson} />
        </div>
      </div>

      {/* Contenido principal con scroll */}
      <div className="flex-grow ml-64 overflow-y-auto pt-8">
         <LessonDetail2 lesson={lesson} openLesson={openLesson} />
      </div>
    </div>
  );
};

export default CourseDetail;
