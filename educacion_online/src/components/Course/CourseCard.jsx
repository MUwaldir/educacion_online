import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    return (
     <Link to={`course/${course.id}`}>
     
        <div key={course.id} className="bg-blue-800 shadow-lg rounded-md hover:bg-black  w-full">
            <div className='relative  overflow-hidden bg-cover bg-no-repeat w-full'>

            <img src={course.image} alt={course.titulo} className="w-full h-40 object-cover rounded-md  transition duration-300 ease-in-out hover:scale-110" />
            </div>
            <h3 className="text-white text-lg font-semibol py-2 px-1">{course.titulo}</h3>
            <p className="text-white py-2 px-1">{course.descripcion}</p>
        </div>
     </Link>
         
        
        
    );
}

export default CourseCard;
