import { DataTypes, Model, STRING, TEXT } from "sequelize";
import sequelize from "../db.js";

const Lesson = sequelize.define(
  "Lesson",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recursos: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    videoid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// import Curso from "./curso.js"; // Importa Curso después de definir Lesson

// Lesson.belongsTo(Curso, { foreignKey: "courseId", targetId: "id" });
export default Lesson;

