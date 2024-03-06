import React, { useState } from "react";

const LessonList = ({ lessons, openLesson, selectedLesson }) => {
  // const [selectedLesson, setSelectedLesson] = useState(lessons[0].id);

  const handleClick = (lessonId) => {
    openLesson(lessonId);
  };
  return (
    <div className="max-h-64 overflow-y-hidden scroll-smooth hover:overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-100">
  <ol className="list-decimal list-inside">
    {lessons.map((lesson) => (
      <li key={lesson.id} className="my-2">
        <a
          onClick={() => handleClick(lesson.id)}
          className={`block py-2 px-3 rounded-md transition-colors duration-300 cursor-pointer ${
            selectedLesson === lesson.id
              ? "bg-blue-700 text-white"
              : "hover:bg-blue-700 hover:text-white"
          }`}
        >
          {lesson.title}
        </a>
      </li>
    ))}
  </ol>
</div>
  

    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

    //     {lessons.map((lesson) => (
    //          <LessonDetail
    //          key={lesson.id}
    //          lesson={lesson}

    //         />
    //     ))}
    // </div>
  );
};

export default LessonList;
