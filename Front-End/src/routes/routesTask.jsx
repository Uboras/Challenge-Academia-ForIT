import { Routes, Route } from "react-router";
import OneTask from '../louyaut/oneTask.jsx';
import AllTask from '../louyaut/allTask.jsx';
import CreateTask from '../louyaut/createTask.jsx';
import { TaskProvider } from '../context/taskContext.jsx';

export default function TaskLayout() {
  return (
    <TaskProvider>
      <Routes>
        <Route path="/onetask" element={<OneTask />} />
        <Route path="/alltask" element={<AllTask />} />
        <Route path="/createtask" element={<CreateTask />} />
      </Routes>
    </TaskProvider>
  );
}


