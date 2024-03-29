const initialState = {
  movie: null,
  cursos: [],
  cursodetail: null,
  lessonscurso: null,
  selectlesson: null,
};

const cursosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return { ...state, movie: action.payload };

    case "FETCH_CURSOS":
      return { ...state, cursos: action.payload };
    case "FETCH_CURSO_DETAIL":
      const CursoDetail = action.payload;
      return {
        ...state,
        cursodetail: CursoDetail,
        lessonscurso: CursoDetail.Lessons,
      };

    case "SELECT_LESSON":
      const lessonId = state.lessonscurso.find((l) => l.id === action.payload);
      return { ...state, selectlesson: lessonId };

    case "SELECT_LESSON_INDEX":
      const lessonIndex = state.lessonscurso[action.payload];
      return { ...state, selectlesson: lessonIndex };
    case "ELIMINAR_LESSON":
      return { ...state, selectlesson: action.payload };

    case "FETCH_AUTHORS":
      console.log(state);
      return { ...state, authors: action.payload };
    case "LIBROS_AUTOR":
      console.log(state);
      return { ...state, lib_author: action.payload };

    case "LIBRO_TITLE":
      const { lib_author } = state;
      const { titulo } = action.payload;
      const filteredBooks = lib_author.filter((book) =>
        book.titulo.includes(titulo)
      );
      return { ...state, lib_title: filteredBooks };

    case "PRUEBA_LIBRO":
      console.log(state.books);
      return { ...state, lib: state.books };
    default:
      return state;
  }
};

export default cursosReducer;
