const app = require("./app/app");
const setupAssociations = require("./models/associations");

// Configurar las asociaciones de modelos
setupAssociations();

const port = app.listen(app.get("port"), () => {
  console.log("Servidor escuchando en el puerto", app.get("port"));
});