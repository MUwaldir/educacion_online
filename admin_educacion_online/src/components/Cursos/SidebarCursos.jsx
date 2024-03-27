// import React from "react";

// const SidebarCursos = ({}) => {
//   return (
//     <div className="w-64">
//       <div className="bg-gray-200 p-4 mb-4 rounded-lg">
//         <h2 className="text-lg font-semibold mb-2">Opciones</h2>
//         <ul>
//           <li
//             className={`cursor-pointer mb-2 ${
//               selectedOption === "accion" ? "text-blue-500" : "text-gray-700"
//             }`}
//             onClick={() => handleOptionClick("accion")}
//           >
//             <FaCog className="inline-block mr-2" /> Acciones
//           </li>
//           <li
//             className={`cursor-pointer mb-2 ${
//               selectedOption === "edit" ? "text-blue-500" : "text-gray-700"
//             }`}
//             onClick={() => handleOptionClick("edit")}
//           >
//             <FaEdit className="inline-block mr-2" /> Editar
//           </li>
//           <li
//             className={`cursor-pointer mb-2 ${
//               selectedOption === "filtro" ? "text-blue-500" : "text-gray-700"
//             }`}
//             onClick={() => handleOptionClick("filtro")}
//           >
//             <FaFilter className="inline-block mr-2" /> Filtro
//           </li>
//           <li
//             className={`cursor-pointer mb-2 ${
//               selectedOption === "delete" ? "text-blue-500" : "text-gray-700"
//             }`}
//             onClick={() => handleOptionClick("delete")}
//           >
//             <FaTrash className="inline-block mr-2" /> Eliminar
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SidebarCursos;
