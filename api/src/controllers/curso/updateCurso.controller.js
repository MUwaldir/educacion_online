import Curso from "../../models/curso.js";

const updateCurso = async (req, res) => {
    const { id } = req.body;
console.log(id);
    try {
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
            estado,
            destacado,
        } = req.body;

        // Buscar el curso por su ID
        const existCurso = await Curso.findByPk(id); // Usa findByPk en lugar de findById

        if (!existCurso) {
            return res.status(404).json({ message: "Curso no encontrado" });
        }

        // Actualizar los campos del curso
        existCurso.titulo = titulo;
        existCurso.descripcion = descripcion;
        existCurso.duracion = duracion;
        existCurso.nivel = nivel;
        existCurso.categoria = categoria;
        existCurso.requisitos = requisitos;
        existCurso.objetivos = objetivos;
        existCurso.image = image;
        existCurso.costo = costo;
        existCurso.estado = estado;
        existCurso.destacado = destacado;

        // Guardar los cambios en la base de datos
        await existCurso.save();
   

        // Responder con éxito
        return res.status(200).json({ message: "Curso actualizado correctamente" });
    } catch (error) {
        // Manejar errores
        console.error("Error al actualizar el curso:", error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export default updateCurso;
