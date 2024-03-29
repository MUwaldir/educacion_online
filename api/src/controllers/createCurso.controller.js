// Importar el modelo del curso y de la lección
import Curso from "../models/curso.js";
import Lesson from "../models/lesson.js";

// Función para crear un curso y sus lecciones
const createCourse = async (req, res) => {
  console.log("value", req.body)
  try {
    // Extraer los datos del cuerpo de la solicitud
    const {
      titulo,
      descripcion,
      duracion,
      nivel,
      categoria,
      requisitos,
      objetivos,
      image,
      costo,
      lessons,
    } = req.body;

    // Crear el curso en la base de datos
    const nuevoCurso = await Curso.create({
      titulo,
      descripcion,
      duracion,
      nivel,
      categoria,
      requisitos,
      objetivos,
      image,
      costo,
    });

    // Crear las lecciones del curso
    const nuevasLecciones = await Promise.all(
      lessons.map(async (lesson) => {
        const { titulo, contenido, duracion, recursos, videoid, order } =
          lesson;
        return await Lesson.create({
          titulo,
          contenido,
          duracion,
          recursos,
          videoid,
          order,
          courseId: nuevoCurso.id, // Asociar la lección con el curso recién creado
        });
      })
    );
    console.log(nuevoCurso)
    const dataCreate = await {...nuevoCurso.dataValues,"Lessons" :nuevasLecciones}

    // Enviar una respuesta de éxito
    res.status(201).json({ cursoCreado: dataCreate, message: "Curso y modulo creados exitosamente"});
  } catch (error) {
    // Manejar errores
    console.error("Error al crear el curso y sus lecciones:", error);
    res
      .status(500)
      .json({ error: "Hubo un error al crear el curso y sus lecciones" });
  }
};

// Exportar la función para su uso en otras partes de la aplicación
export default createCourse;
