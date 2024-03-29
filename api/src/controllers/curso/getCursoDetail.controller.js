import Curso from "../../models/curso.js";
import Lesson from "../../models/lesson.js";

const getCursoDetail = async (req, res) => {
  const { id } = req.params;
  try {
    // Buscar el curso por su ID y también incluir los detalles de los módulos asociados
    // const cursoDetail = await Curso.findByPk(id, {
    //   include: Lesson // Incluir los detalles de los módulos asociados al curso
    // });
    const cursoDetail = await Curso.findByPk(id, {
      include: {
        model: Lesson, // Especificar el modelo de los módulos
        order: [['order', 'ASC']] // Ordenar los módulos por el campo 'order' de forma ascendente
      }
    });
    if (!cursoDetail) {
      // Manejar el caso en que no se encuentre el curso
      return res.status(404).json({ message: "Curso not found" });
    }

    // Responder con los detalles del curso, incluyendo los módulos asociados
    res.status(200).json({ cursoDetail });
  } catch (error) {
    // Manejar errores de servidor
    res.status(500).json({ message: error.message });
  }
};

export default getCursoDetail;
