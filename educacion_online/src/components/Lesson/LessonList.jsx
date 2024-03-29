import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLesson } from "../../redux/actions/actions";

const LessonList = () => {
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessonscurso);
  const selectedLesson = useSelector((state) => state.selectlesson);

  const handleClick = (lessonId) => {
    dispatch(selectLesson(lessonId));
  };

  return (
    <div className="lesson-list-container bg-gray-100 rounded-md p-4 mb-16 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
      <ol>
        {lessons.map((lesson) => (
          <a
            key={lesson.id}
            onClick={() => handleClick(lesson.id)}
            className={`block p-3 mb-2 rounded-md transition-colors duration-300 cursor-pointer ${
              selectedLesson && selectedLesson.id === lesson.id
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200 hover:text-blue-700"
            }`}
          >
            <li className="text-base">{lesson.titulo}</li>
          </a>
        ))}
      </ol>
    </div>
  );
};

export default LessonList;
