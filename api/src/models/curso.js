import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Lesson from "./lesson.js";


// class Course extends Model {}
const Curso = sequelize.define(
  "Curso",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, // Genera un UUID automáticamente al crear un nuevo curso
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nivel: {
      type: DataTypes.ENUM("Básico", "Intermedio", "Avanzado"),
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    requisitos: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    objetivos: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    costo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    estado:{
      type: DataTypes.ENUM("Pago", "Gratis", "Antiguo"),
      allowNull:false,
      defaultValue: "Pago", // Valor predeterminado
    },
    destacado:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false
    }
  },
  {
    timestamps: false,
  }
);

Curso.hasMany(Lesson, {
  foreignKey: "courseId",
  sourceKey: "id",
});



export default Curso;
