import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from '../../context/taskContext.jsx';
import { v4 as uuidv4 } from 'uuid';
export default function TaskForm() {
  const { tasks, addTask, editTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complete, setComplete] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const task = tasks.find((t) => t.id === id);
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
        setComplete(task.complete);
      }
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length === 0) {
      alert("El título no puede estar vacío.");
      return;
    }

    if (id) {
      // Edición: no cambia createdAt ni id
      editTask(id, { title, description, complete });
    } else {
      // Creación: generamos id y createdAt
      const newTask = {
        id:uuidv4(),
        title,
        description,
        complete,
        createdAt: new Date()
      };
      addTask(newTask);
    }
    navigate("/alltask");
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>{id ? "Editar Tarea" : "Nueva Tarea"}</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={complete}
            onChange={(e) => setComplete(e.target.checked)}
            id="completeCheck"
          />
          <label className="form-check-label" htmlFor="completeCheck">
            ¿Completada?
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
}
