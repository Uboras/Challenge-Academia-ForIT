import { Routes, Route } from "react-router";
import Home from '../louyaut/home.jsx';
import RoutesTask from './routesTask.jsx';
export default function reoutes() {
  return (

    <Routes>
      {        /* Rutas de la aplicacion  */}
      <Route path="/" element={<Home />} />
      {        /* Rutas de la tareas (definido asi por el providerTask para uso solo de esta parte de la aplicacion) */}
      <Route path="/*" element={<RoutesTask />} />
    </Routes>
  )
}
