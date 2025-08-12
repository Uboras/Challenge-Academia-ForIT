import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

// creamos un contexto para las tareas
export const useTasks = () => useContext(TaskContext);
const urlInicial = "http://localhost:3000/api/tasks";


export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // traer tareas desde el backend
  const fetchTasks = async () => {
    const res = await fetch(`${urlInicial}`);
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async (task) => {
  try {
    const res = await fetch(urlInicial, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    if (!res.ok) throw new Error("Error al crear tarea");

    const newTask = await res.json();
    setTasks((prev) => [...prev, newTask]);
  } catch (error) {
    console.error("addTask error:", error);
    // Podés mostrar una alerta o manejar el error como prefieras
  }
};

// Editar tarea para el backend
const editTask = async (id, updatedTask) => {
  try {
    const res = await fetch(`${urlInicial}/${id}`, {
      method: "PUT", // o PATCH si sólo modificás parte
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });

    if (!res.ok) throw new Error("Error al editar tarea");

    const data = await res.json();
    setTasks((prev) => prev.map((t) => (t.id === id ? data : t)));
  } catch (error) {
    console.error("editTask error:", error);
  }
};

  // Eliminar tarea
  const deleteTask = async (id) => {
   await fetch(`${urlInicial}/${id}`, { 
      method: "DELETE",
    });
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
