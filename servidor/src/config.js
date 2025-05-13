require("dotenv").config();

// Configuración de la aplicación
module.exports = {
  app: {
    port: process.env.PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "palabraclave",
    expireIn: process.env.JWT_EXPIRE_IN || "1h",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DB || "cecep_parcial_enfasis",
    port: process.env.MYSQL_PORT || 3306,
    dialect: process.env.MYSQL_DIALECT || "mysql",
  },
  apiKey: process.env.API_KEY,
};
