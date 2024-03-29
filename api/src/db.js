// db.js

import  Sequelize  from 'sequelize';
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Extraer las variables de entorno necesarias
const { DB_HOST, DB_USER, DB_PASSWORD, PORT } = process.env;

// Crear una instancia de Sequelize con la configuración proporcionada
 const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/educaciononline`,
  {
    logging: false,
    native: false,
  }
);

export default sequelize;

