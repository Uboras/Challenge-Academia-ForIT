/****Challenge ingreso a Academia ForIT 2025***


//Usar un array en memoria como almacenamiento temporal
//Implementar manejo básico de errores  
// *******************************************************/
// importar las dependencias
const express = require("express");
const dotev = require("dotenv");
const cors = require("cors");
// Importar las rutas de tareas
const TasksRoutes = require("./endPoint/task");


// Puerto de la aplicación
const PORT = process.env.PORT || 3000;
// crear una instancia de la aplicación Express
const app = express();
// Configurar dotenv para cargar variables de entorno desde un archivo .env
dotev.config();
// Configurar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Importar las rutas de tareas
app.use("/api/tasks",TasksRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
