import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import datalessons from "../../utils/dataLecciones";
import { useRef } from "react";
import { useEffect } from "react";
const LessonDetail2 = ({ lesson, openLesson }) => {

  const getYouTubeVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match && match[1];
  };
    // const lesson = datalessons.find((l) => l.id === parseInt(id));

  const videoId = getYouTubeVideoId(lesson.videoUrl);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
 

  // Obtener el índice de la lección actual
  const currentIndex = datalessons.findIndex((l) => l.id === lesson.id);
  console.log(currentIndex);
  // Manejar el clic en el botón "Siguiente lección"
  const handleNextLesson = () => {
    // Verificar si hay una próxima lección disponible
    if (currentIndex < datalessons.length - 1) {
      // Obtener el ID de la próxima lección
      const nextLessonId = datalessons[currentIndex + 1].id;
      // Construir la URL de la próxima lección
    //   openLesson(nextLessonId)
    //   const nextLessonUrl = `/lessondetail/${nextLessonId}`;
    //   return nextLessonUrl;
    return nextLessonId;

    } else {
      // No hacer nada si no hay más lecciones disponibles

      // Construir la URL de la próxima lección

      return null;
    }
  };
  const handleBackLesson = () => {
    // Verificar si hay una próxima lección disponible
    if (currentIndex < datalessons.length && currentIndex > 0) {
      // Obtener el ID de la próxima lección
      const backLessonId = datalessons[currentIndex - 1].id;
      // Construir la URL de la próxima lección
     
    //   const backLessonUrl = `/lessondetail/${backLessonId}`;

    //   return backLessonUrl;
    return backLessonId;
    } else {
      // No hacer nada si no hay más lecciones disponibles

      // Construir la URL de la próxima lección

      return null;
    }
  };

  const backLessonId = handleBackLesson();

  const nextLessonId = handleNextLesson();

  console.log(lesson)

  return (
    <div className="lesson-detail-container p-6 bg-sky-200">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p>Duración: {lesson.duration}</p>

      <div className="lesson-content mt-4">
        <h2 className="text-2xl font-bold mb-2">Introducción</h2>
        <p className="text-gray-700 mb-4">{lesson.content.introduction}</p>

        <h2 className="text-2xl font-bold mb-2">
          {lesson.content.definition.title}
        </h2>
        <p className="text-gray-700 mb-4">
          {lesson.content.definition.description}
        </p>

        <h2 className="text-2xl font-bold mb-2">
          {lesson.content.variablesAndConstants.title}
        </h2>
        <p className="text-gray-700 mb-4">
          {lesson.content.variablesAndConstants.description}
        </p>

        {/* Agrega más secciones de contenido según sea necesario */}

        <h2 className="text-2xl font-bold mb-2">Imágenes</h2>
        <div className="image-gallery grid grid-cols-1 md:grid-cols-2   gap-4 ">
          {lesson.images.map((image, index) => (
            <div key={index} className="mb-4 bg-slate-400  rounded-lg ">
              <img
                src={image.url}
                alt={image.description}
                className="w-full rounded-lg"
              />
              <p className="text-gray-700 mt-2 p-2">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
      {videoId && (
        <div className=" aspect-w-16 aspect-h-9 flex justify-center mt-4 ">
          <YouTube
            videoId={videoId}
            opts={opts}
            className=" inset-0 w-full h-full md:w-1/2 sm:h-80"
          />
        </div>
      )}

      <div className="flex justify-between">
        {nextLessonId && (
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={() => openLesson(nextLessonId)}>
                Siguiente Lección
            </button>
     
        )}
        {backLessonId && (
             <button onClick={() => openLesson(backLessonId)}
             className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 righ-5 ">
              Anterior Lección
         </button>
         
        )}
      </div>
    </div>
  );
};

export default LessonDetail2;
