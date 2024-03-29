export const FETCH_MOVIE = "FETCH_MOVIE";
export const FETCH_CURSOS = "FETCH_CURSOS";
export const SELECCION_CURSO = "SELECCION_CURSO";
export const CREAR_CURSO = "CREAR_CURSO";
export const BORRAR_MESSAGE = "BORRAR_MESSAGE";
export const DELETE_CURSO = "DELETE_CURSO";
export const UPDATE_CURSO = "UPDATE_CURSO";
export const MESSAGE_CREATE_USER = "MESSAGE_CREATE_USER";
export const GET_USERS = "GET_USERS";
export const SELECT_USER = "SELECT_USER";
export const DELETE_USER_SELECTED = "DELETE_USER_SELECTED";









const URL_API = "http://localhost:3001/api";

export const fetchMovie = (movie) => ({
  type: FETCH_MOVIE,
  payload: movie,
});

export const fetchCursos = () => (dispatch) => {
  console.log("fetch de CURSOS");
  fetch(URL_API + "/getcursos")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener cursos");
      }
      return response.json();
    })
    .then((data) => {
      dispatch({
        type: FETCH_CURSOS,
        payload: data,
      });
    })
    .catch((error) => {
      console.error("Error en fetchCursos:", error);
      // Puedes despachar una acción adicional aquí para manejar el error
    });
};

export const seleccionCurso = (id) => (dispatch) => {
  return dispatch({
    type: "SELECCION_CURSO",
    payload: id,
  });
};

export const crearCurso = (values) => async (dispatch) => {
  console.log(values);
  const response = await fetch(URL_API + "/createcurso", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  const data = await response.json();
  console.log(data);
  return dispatch({
    type: "CREAR_CURSO",
    payload: data,
  });
};
export const proyectoDetail = (id) => (dispatch) => {
  return dispatch({
    type: "PROYECTO_DETAIL",
    payload: id,
  });
};

export const deleteCurso = (id) => async (dispatch) => {
  const response = await fetch(URL_API + "/deletecurso/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return dispatch({
    type: "DELETE_CURSO",
    payload: data.message,
  });
};

export const updateCurso = (values) => async (dispatch) => {
  try {
    const response = await fetch(URL_API + "/updatecurso", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    console.log(data); // Verifica si imprime la respuesta del servidor
    return dispatch({
      type: "UPDATE_CURSO",
      payload: data.message,
    });
  } catch (error) {
    console.error("Error al actualizar el curso:", error);
    // Manejar el error de acuerdo a tus necesidades
  }
};

export const BorrarMessage = () => (dispatch) => {
  return dispatch({
    type: "BORRAR_MESSAGE",
  });
};

// GESTION USUARIOS
export const createUser = (values) => async (dispatch) => {
  const response = await fetch(URL_API + "/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  const data = await response.json();
  return dispatch({
    type: "MESSAGE_CREATE_USER",
    payload:data.message
  });
};
export const getUsers = () => async (dispatch) => {
    const response = await fetch(URL_API + "/users");
    const data= await response.json();
    return dispatch({
        type: "GET_USERS",
        payload:data
      });
}


export const selectUsuario = (id) => async (dispatch) => {
    return dispatch({
        type: "SELECT_USER",
        payload:id
      });
}

export const deleteUsuarioSelecionado = () => async (dispatch) => {
    return dispatch({
        type: "DELETE_USER_SELECTED",
        
      });
}