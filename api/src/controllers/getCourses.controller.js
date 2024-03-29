import Curso from "../models/curso.js";
import Lesson from "../models/lesson.js";

export const getCourses = async (req, res, next) => {
  try {
    const dataCursos = await Curso.findAll({ include: Lesson });
    res.status(200).json(dataCursos);
  } catch (error) {
    console.error("Error al obtener los cursos:", error);
    res.status(500).json({ message: "Error al obtener los cursos" });
  }
};
