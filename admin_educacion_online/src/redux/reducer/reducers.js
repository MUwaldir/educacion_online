const initialState = {
  movie: null,
  cursos: [],
  cursoseleccionado: null,
  messageCreateCurso: null,
  messageDeleteCurso: null,
  messageUpdateCurso: null,
  messageCreateUser: null,
  usuarios: [],
  usuarioSeleccionado: null,
};

const cursosOnlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return { ...state, movie: action.payload };

    case "FETCH_CURSOS":
      return { ...state, cursos: action.payload };

    case "SELECCION_CURSO":
      const cursoselect = state.cursos.find(
        (curso) => curso.id === action.payload
      );
      delete cursoselect.Lessons;
      return { ...state, cursoseleccionado: cursoselect };
    case "CREAR_CURSO":
      const cursoCreado = action.payload.cursoCreado;

      return {
        ...state,
        cursos: { ...state.cursos, ...cursoCreado },
        messageCreateCurso: action.payload.message,
      };
    case "UPDATE_CURSO":
      return {
        ...state,
        messageUpdateCurso: action.payload,
      };

    case "BORRAR_MESSAGE":
      return {
        ...state,
        messageCreateCurso: null,
        messageDeleteCurso: null,
        messageUpdateCurso: null,
        messageCreateUser: null,
      };
    case "DELETE_CURSO":
      return { ...state, messageDeleteCurso: action.payload };

    case "MESSAGE_CREATE_USER":
      return { ...state, messageCreateUser: action.payload };
    case "GET_USERS":
      return { ...state, usuarios: action.payload };

    case "SELECT_USER":
      const userSelected = state.usuarios.find(
        (user) => user.id === action.payload
      );
      return { ...state, usuarioSeleccionado: userSelected };
    case "DELETE_USER_SELECTED":
      return { ...state, usuarioSeleccionado: null };

    case "PROYECTO_DETAIL":
      const { proyectos } = state;
      const data = proyectos.find((p) => p._id === action.payload);
      return { ...state, proyectoDetail: data };

    default:
      return state;
  }
};

export default cursosOnlineReducer;
