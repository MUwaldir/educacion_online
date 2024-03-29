import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import { selectLessonIndex } from "../../redux/actions/actions";

const LessonDetail2 = () => {
  const dispatch = useDispatch();
  const lesson = useSelector((state) => state.selectlesson);
  const lessons = useSelector((state) => state.lessonscurso);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextLesson = () => {
    if (currentIndex < lessons.length - 1) {
      dispatch(selectLessonIndex(currentIndex + 1));
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const backLesson = () => {
    if (currentIndex > 0) {
      dispatch(selectLessonIndex(currentIndex - 1));
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="lesson-detail-container p-6 text-black border-l-2 border-blue-400 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{lesson.titulo}</h1>
      <p>Duración: {lesson.duracion} semanas</p>

      <div className="lesson-content mt-4">
        <h2 className="text-2xl font-bold mb-2">Introducción</h2>
        <p className="text-black mb-4">{lesson.contenido}</p>

        <h2>Recursos</h2>
        <ul className="list-disc pl-6">
          {Array.isArray(lesson.recursos) &&
            lesson.recursos.length > 0 &&
            Object.keys(lesson.recursos[0]).length > 0 &&
            lesson.recursos.map((recurso, index) => (
              <li key={index} className="text-black">
                {recurso}
              </li>
            ))}
        </ul>
      </div>

      {lesson && (
        <div className="aspect-w-16 aspect-h-9 flex justify-center mt-4">
          <YouTube
            videoId={lesson.videoid}
            opts={{
              height: "100%",
              width: "100%",
              playerVars: { autoplay: 0 },
            }}
            className="w-full h-full md:w-1/2 sm:h-80"
          />
        </div>
      )}

      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={backLesson}
          disabled={currentIndex === 0}
        >
          Anterior Lección
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={nextLesson}
          disabled={currentIndex === lessons.length - 1}
        >
          Siguiente Lección
        </button>
      </div>
    </div>
  );
};

export default LessonDetail2;
