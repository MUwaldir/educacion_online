import Curso from "../../models/curso.js";
import Lesson from "../../models/lesson.js";

const deleteCurso = async (req, res, next) => {
  const { id } = req.params;

  try {
    // Buscar y eliminar el curso por su ID
    const deletedCurso = await Curso.destroy({ where: { id } });

    if (!deletedCurso) {
      return res.status(404).json({ message: "Curso no encontrado" });
    }

    // Eliminar las lecciones relacionadas con el curso eliminado
    await Lesson.destroy({ where: { courseId: id } });

    return res.status(200).json({ message: "Curso y lecciones eliminados exitosamente" });
  } catch (error) {
    console.error("Error al eliminar el curso y las lecciones:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default deleteCurso;
