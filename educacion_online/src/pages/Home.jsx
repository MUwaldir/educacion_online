import React from 'react';
import CourseList from '../components/Course/CourseList';

const Home = ({ importantCourses}) => {
  return (
    <div className="container mx-auto pt-8  pb-2 mt-10" style={{backgroundColor : '#fff6ed'}}>
      <h1 className="text-white text-7xl font-bold mb-4 text-center font-serif italic bg-black pt-2">Plataforma de Educación en Línea</h1>
      <p className=" text-black mb-4 pl-2  text-2xl hover:text-gray-500">Explora nuestros cursos y comienza tu viaje de aprendizaje hoy mismo.</p>
      <h2 className="text-3xl font-bold mb-4">Cursos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {importantCourses.map(course => (
          <a key={course.id} href={`courses/course/${course.id}`} className="block">
            <div className="bg-blue-800 shadow-lg rounded-md mx-4 hover:bg-black hover:scale-105">
              <img src={course.image} alt={course.title} className="w-full h-auto rounded-md mb-4 " />
              <h3 className="text-white text-lg font-bold px-2">{course.title}</h3>
              <p className="text-white px-2 pb-2">{course.description}</p>
              {/* Aquí podrías agregar más detalles del curso, como el instructor, la duración, etc. */}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
