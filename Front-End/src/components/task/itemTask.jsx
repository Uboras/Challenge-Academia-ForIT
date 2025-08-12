import React, { useState } from "react";
import { useTasks } from "../../context/taskContext.jsx";
import ModalTask from "./modalTask.jsx";

export default function TaskItem({ task }) {
  const { deleteTask } = useTasks();
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <strong>{task.title}</strong>
          <span
            className={`badge ms-2 ${
              task.complete ? "bg-success" : "bg-warning text-dark"
            }`}
          >
            {task.complete ? "Completada" : "Pendiente"}
          </span>
        </div>
        <div>
          <button
            className="btn btn-sm btn-primary me-2"
            data-bs-toggle="modal"
            data-bs-target="#taskModal"
            onClick={() => setShowModal(true)}
          >
            Editar
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteTask(task.id)}
          >
            Eliminar
          </button>
        </div>
      </li>

      {/* Renderizamos el modal solo cuando showModal es true */}
      {showModal && <ModalTask task={task} />}
    </>
  );
}
