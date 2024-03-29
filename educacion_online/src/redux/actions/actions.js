export const FETCH_MOVIE = "FETCH_MOVIE";
export const FETCH_FETCH_CURSOS = "FETCH_FETCH_CURSOS";
export const FETCH_CURSO_DETAIL = "FETCH_CURSO_DETAIL";
export const SELECT_LESSON = "SELECT_LESSON";
export const CURSO_LESSONS = "CURSO_LESSONS";
export const SELECT_LESSON_INDEX = "SELECT_LESSON_INDEX";
export const ELIMINAR_LESSON = "ELIMINAR_LESSON";












const URL_API = "http://localhost:3001/api/";


export const fetchMovie = (movie) => ({
  type: FETCH_MOVIE,
  payload: movie,
});

export const fetchCursos = () => (dispatch) => {
  fetch(URL_API+"getcursos")
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: "FETCH_CURSOS",
        payload: data,
      });
    });
};

export const getCursoDetail = (id) => (dispatch) => {
  fetch(URL_API+"getcurso/"+id)
  .then((response) => response.json())
  .then((data) => {
    dispatch({
      type: "FETCH_CURSO_DETAIL",
      payload: data.cursoDetail,
    });
  });
}

export const selectLesson = (id) => (dispatch) => {
  return dispatch({
    type: "SELECT_LESSON",
    payload: id,
  });

}
export const selectLessonIndex = (index) => (dispatch) => {

  return dispatch({
    type: "SELECT_LESSON_INDEX",
    payload: index,
  });
}
export const eliminarlesson = () => (dispatch) => {
  return dispatch({
    type: "ELIMINAR_LESSON",
    payload: "",
  });
}
// export const fetchAuthors = () => (dispatch) => {
//   fetch(URLAUTHORS)
//     .then((response) => response.json())
//     .then((data) => {
//       dispatch({
//         type: "FETCH_AUTHORS",
//         payload: data,
//       });
//     });
// };

// export const librosWhitAuthor = (libros, autores) => (dispatch) => {
//   const librosFilterAutor = libros.map((l) => {
//     const autor = autores.find((a) => a.id_autor === l.id_autor);
//     return {
//       ...l,
//       autor: autor.nombre,
//     };
//   });

//   return dispatch({
//     type: "LIBROS_AUTOR",
//     payload: librosFilterAutor,
//   });
// };

// export const LibroFilterTitle = (titulo) => (dispatch) => {
//   return dispatch( {
//     type: "LIBRO_TITLE",
//     payload:titulo
//   })
// }

// export const pruebaLibro = (titulo) => (dispatch) => {
//   return dispatch({
//     type: "PRUEBA_LIBRO",
//     payload:titulo
//   })
// }
