import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4, // Genera un UUID automáticamente al crear un nuevo curso
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM("admin", "usuario", "superadmin", "editor"), // Definir los roles permitidos
    allowNull: false,
    defaultValue: "usuario", // Opcional: establecer un valor por defecto
  },
  suspendido: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, // Establecer como no suspendido por defecto
  },
});

export default User;
