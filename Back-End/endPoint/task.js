/**
// Implementar los siguientes endpoints: 
//  ○ GET /api/tasks - Obtener todas las tareas 
//  ○ POST /api/tasks - Crear una nueva tarea 
//  ○ PUT /api/tasks/:id - Actualizar una tarea existente 
//  ○ DELETE /api/tasks/:id - Eliminar una tarea 
 */

//para crear ids
const { v4: uuidv4 } = require("uuid");

const express = require("express");
// crear una instancia de la aplicación Express
const router = express.Router();
// Array en memoria para almacenar las tareas (pedido en el enunciado)

let tasks = [];

// Endpoint para obtener todas las tareas
router.get("/", (req, res) => {
    //retornamos todas las tareas(el array)
  res.json(tasks);
});
// Endpoint para crear una tarea todas las tareas
router.post("/", (req, res) => {
    //sacamos el body de la request
    const { body } = req;

    const newTask = {
    id: uuidv4(), 
    title: body.title || "",
    description: body.description || "",
    complete: body.complete ?? false,
    createdAt: new Date()
  };
    //creamos la tarea ledamos un id unico sacando el largo del array +1 y adicionaos el body
     tasks.push(newTask);
    //retornamos codigo 201 y la ultima tarea creada
    res.status(201).json(tasks[tasks.length - 1]);
});
// Endpoint para modifoicar una tareas.
router.put("/:id", (req, res) => {
  //sacamos el id de los parametros
  const { id } = req.params;
  //sacamos el body de la request
  const { title, description, complete } = req.body;
  //buscamos la tarea por id
  let task = tasks.find((t) => t.id === id);
  //si no existe la tarea ( el find devuelve undefined si no encuentra nada)
  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }
  //actualizamos los campos de la tarea con los valores del body, si no se pasan, se mantienen los actuales
  task.title = title ?? task.title;
  task.description = description ?? task.description;
  task.complete = complete ?? task.complete;

  //retornamos la tarea modificada
  res.json(task);
});

// Endpoint para eliminar 1 tarea.
router.delete("/:id", (req, res) => {
    //sacamos el id de los parametros
    const { id } = req.params;
    
    //buscamos la tarea por id
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
    //si no existe la tarea ( el findIndex devuelve -1 si no encuentra nada)
    if (taskIndex === -1) {
        //si no existe la tarea mandamos un 404 que es no entontrado        
        return res.status(404).json({ error: "Tarea no encontrada" });
        }
    //eliminamos la tarea
    tasks.splice(taskIndex, 1);
    //reteornamos un codigo con el contenido "tarea eliminada"
    res.json({ message: "Tarea eliminada" });
       
});
//exportar el router en modulos
module.exports = router;