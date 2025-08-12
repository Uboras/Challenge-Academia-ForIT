import React from 'react';
import Header from '../components/header.jsx';
import Fondo from '../assets/fondo.avif';
import Footer from '../components/footer.jsx';

export default function App() {
  return (
    <div className="background background--active  text-center max-heigth-100vh">
      <div className="background background--active"
        style={{ backgroundImage: `url(${Fondo})`, backgroundRepeat: "no-repeat", backgroundSize: 'contain', zIndex: -1, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.3 }}>
      </div>
        { /*navegador*/}
      <Header />
        { /*logo y titulo*/}
      { /*contenido principal*/}
      <div className="background background--active px-4 py-5 my-5 text-center ">
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
          <p className="lead mb-8 fw-bold">
            Gestiona tus tareas de forma sencilla y mantén el control de tus proyectos.
            Crea, edita y marca como completadas tus actividades en segundos.
          </p>
        </div>
      </div>
      <Footer />
    </div >
  );
}
