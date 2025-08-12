# \[Challenge Academia ForIt\]

Aplicación Front End orientado a Realizar tareas.

## Technologies used

###Front End
- [React](https://reactjs.org/) 
-[vite]()
- Rutas usando [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
- Manejo de estado hook "useContext"


### Back End
- [node.js] con express. 
- boostrap para los estilos. 

## Setup
### Back-End
1. Clone the repository and install the dependencies
```bash
npm install 
```
2. Start the frontend application locally
```bash
node server.js
```
### Front-End
1. Clone the repository and install the dependencies
```bash
npm install 
```
2. Start the frontend application locally
```bash
npm run dev
```


## Routes
Este proyecto usa  [`react-router-dom v4`](https://reacttraining.com/react-router/core), Tiene un enrutamiento en `Routes.jsx` en donde se definen las rutas necesarias. 

Hay rutas para navegar parte de las diferentes páginas: 

### Rutas
<Routes>
      {        /* Rutas de la aplicacion  */}
      <Route path="/" element={<Home />} />
      {        /* Rutas de la tareas (definido asi por el providerTask para uso solo de esta parte de la aplicacion) */}
      <Route path="/*" element={<RoutesTask />} />
</Routes>
### Rutas exclusivas para las tareas
  <TaskProvider>
      <Routes>
        <Route path="/onetask" element={<OneTask />} />
        <Route path="/alltask" element={<AllTask />} />
        <Route path="/createtask" element={<CreateTask />} />
      </Routes>
    </TaskProvider>


## Manejo de estados

El proyecto usa un proveedor de funciones tanto para adicionar, eliminar y modificar las tareas. usando un contexto con el hook useContext.
Solo estan contempladas las rutas necesarias de este provider.

## Repositorio y despliegue. 
No se realizo el despliegue, debe ser desplegado de forma local. si fuera el caso de despliegue en un Hosting debe cambiar las rutas de la api. 

## Versionado.
Se manejo con Git atraves de GitBash , tanto integrado con Visual studio Code , como el uso de terminal gitBash.

## Se trato de comentar todo el código para mayor entendimiento
## No se realizaron pruebas unitarias ni de integridad. 
## Espero evaluación y Buena semana