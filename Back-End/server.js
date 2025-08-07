/****Challenge ingreso a Academia ForIT 2025***


//Usar un array en memoria como almacenamiento temporal
//Implementar manejo básico de errores  
// *******************************************************/
// importar las dependencias
const express = require("express");
const dotev = require("dotenv");
// Importar las rutas de tareas
const TasksRoutes = require("./endPoint.js/task");



// Puerto de la aplicación
const PORT = process.env.PORT || 3000;
// crear una instancia de la aplicación Express
const app = express();
// Configurar dotenv para cargar variables de entorno desde un archivo .env
dotev.config();

// Middleware para parsear JSON
app.use(express.json());

// Importar las rutas de tareas
app.use("./endPoint.js/task",TasksRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
