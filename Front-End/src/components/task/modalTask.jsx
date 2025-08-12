import React, { useState } from "react";
import { useTasks } from "../../context/taskContext.jsx";

export default function ModalTask({ task }) {
  const { editTask } = useTasks();

  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [complete, setComplete] = useState(task?.complete || false);
  const id = task?.id || null;

  const handleSubmit = (e) => {
    editTask(id, { title, description, complete });
    // Cerrar el modal después de editar
    const modalEl = document.getElementById("taskModal");
    // lo saque de la documentación de bootstrap pero no funciona del todo bien
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    // Si el modal está abierto, lo cerramos
    if (modal) modal.hide();
  };

  return (
    <div
      className="modal fade"
      id="taskModal"
      tabIndex="-1"
      aria-labelledby="taskModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="taskModalLabel">
              {id ? "Editar Tarea" : "Nueva Tarea"}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body">
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
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="completeCheck"
                checked={complete}
                onChange={(e) => setComplete(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="completeCheck">
                Completada
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="submit"
              className={`btn ${id ? "btn-primary" : "btn-success"}`}
            >
              {id ? "Guardar Cambios" : "Crear Tarea"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
