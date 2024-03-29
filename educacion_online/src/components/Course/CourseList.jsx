import React from "react";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

const CourseList = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2 px-2">
      {courses.map((course, index) => (
        
          <CourseCard key={index} course={course} />
       
      ))}
    </div>
  );
};

export default CourseList;
