import React from 'react';
import Header from '../components/header.jsx';

export default function App() {
  return (
    <div>
      <Header />
      <section className="px-4 py-5 my-5 text-center bg-light rounded-3 shadow-sm">
        <img
          className="d-block mx-auto mb-4"
          src="https://cdn-icons-png.flaticon.com/512/3176/3176367.png"
          alt="Gestión de tareas"
          width="96"
          height="96"
        />
        </section>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://cdn-icons-png.flaticon.com/512/3176/3176367.png"
          alt="Logo tareas"
          width="90"
          height="90"
        />
        <h1 className="display-5 fw-bold text-body-emphasis">
          Organiza tu día, alcanza tus metas
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Gestiona tus tareas de forma sencilla y mantén el control de tus proyectos.
            Crea, edita y marca como completadas tus actividades en segundos.
          </p>
        </div>
      </div>
    </div>
  );
}
