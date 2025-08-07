/**
// Implementar los siguientes endpoints: 
//  ○ GET /api/tasks - Obtener todas las tareas 
//  ○ POST /api/tasks - Crear una nueva tarea 
//  ○ PUT /api/tasks/:id - Actualizar una tarea existente 
//  ○ DELETE /api/tasks/:id - Eliminar una tarea 
 */

const express = require("express");
// crear una instancia de la aplicación Express
const router = express.Router();
// Array en memoria para almacenar las tareas (pedido en el enunciado)
let tasks = [
  { id: 1, title: "Aprender Git", completed: true },
  { id: 2, title: "Configurar backend con Express", completed: false },
  { id: 3, title: "Crear frontend con React", completed: false },
  { id: 4, title: "Hacer deploy del proyecto", completed: false },
];



// Endpoint para obtener todas las tareas
router.get("/", (req, res) => {
    //retornamos todas las tareas(el array)
  res.json(tasks);
});
// Endpoint para crear una tarea todas las tareas
router.post("/", (req, res) => {
    //sacamos el body de la request
    const { body } = req;
    //creamos la tarea ledamos un id unico sacando el largo del array +1 y adicionaos el body
    tasks.push({ id: tasks.length + 1, ...body });
    //retornamos codigo 201 y la ultima tarea creada
    res.status(201).json(tasks[tasks.length - 1]);
});
// Endpoint para modifoicar una tareas.
router.put("/:id", (req, res) => {
  //sacamos el id de los parametros
  const { id } = req.params.id;
    //sacamos el body de la request
    const { body } = req;
    //buscamos la tarea por id
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
    //si no existe la tarea ( el findIndex devuelve -1 si no encuentra nada)
    if (taskIndex === -1) {
        //si no existe la tarea mandamos un 404 que es no entontrado
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    //actualizamos la tarea
    tasks[taskIndex] = { ...tasks[taskIndex], ...body };
    //retornamos la tarea actualizada
      res.json(tasks);
});
// Endpoint para eliminar 1 tarea.
router.delete("/:id", (req, res) => {
    //sacamos el id de los parametros
    const { id } = req.params;
    //buscamos la tarea por id
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
    //eliminamos la tarea
    tasks.splice(taskIndex, 1);
    //si no existe la tarea ( el findIndex devuelve -1 si no encuentra nada)
    if (taskIndex === -1) {
        //si no existe la tarea mandamos un 404 que es no entontrado        
        return res.status(404).json({ error: "Tarea no encontrada" });
        }
    //reteornamos un codigo con el contenido "tarea eliminada"
    res.json({ message: "Tarea eliminada" });
       
});
//exportar el router en modulos
module.exports = router;