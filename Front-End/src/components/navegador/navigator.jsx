import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigator() {
  return (
    <nav className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/createTask"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Crear una tarea
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/alltask"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Todas las tareas...
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/onetask"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Buscar una tarea
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
