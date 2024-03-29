import React, { useState } from 'react';
import CourseList from '../components/Course/CourseList';
import { useSelector } from 'react-redux';

const Courses = () => {
  const courses = useSelector((state) => state.cursos)
  const [searchTerm, setSearchTerm] = useState('');

  // Función para filtrar los cursos por nombre
  const filterCoursesByName = (course) => {
    return course.titulo.toLowerCase().includes(searchTerm.toLowerCase());
  };

  // Filtrar los cursos por nombre
  const filteredCourses = courses.filter(filterCoursesByName);

  return (
    <div className="flex-grow mx-auto py-8 " style={{backgroundColor : '#fff6ed'}}>
      <h2 className="text-3xl font-bold mb-4">Todos los Cursos</h2>
      {/* Input de búsqueda */}
      <div className="mb-4 mx-2 md:w-1/2">
        <input
          type="text"
          placeholder="Buscar curso por nombre..."
          className="border border-gray-300 rounded-md py-2 px-4 w-full "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Lista de cursos filtrados */}
      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default Courses;
