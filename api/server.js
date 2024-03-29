import app from "./src/app.js";
import sequelize from "./src/db.js";
import Curso from "./src/models/curso.js";
import cursosData from "./utils/cursosData.json" assert { type: "json" };
// import Curso from "./src/models/curso.js";
// import { courses } from "./utils/dataprueba.js";

const PORT = process.env.PORT;
async function main() {
  await sequelize
    .sync({ force: false })
    .then(async () => {
      console.log("Database connection established successfully.");
      // //    funcion para insrrtara data bastante
      //     Curso.bulkCreate(courses)
      // await insertarCursosYModulos();
      // Tu código para iniciar el servidor aquí
      app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
      });
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
}

main();

const insertarCursosYModulos = async () => {
  try {
    // Recorre la lista de cursos
    for (const cursoData of cursosData) {
      // Crea el curso en la base de datos
      const curso = await Curso.create(cursoData);

      // Recorre la lista de módulos del curso
      for (const moduloData of cursoData.lessons) {
        // Crea el módulo y lo asocia al curso
        await curso.createLesson(moduloData);
      }
    }

    console.log("Cursos y módulos insertados correctamente.");
  } catch (error) {
    console.error("Error al insertar cursos y módulos:", error);
  }
};

// Llama a la función para insertar los cursos y módulos
