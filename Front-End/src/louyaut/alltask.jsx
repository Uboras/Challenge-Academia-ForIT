import Header from '../components/header';
import TaskList from '../components/task/listTask.jsx';

export default function AllTask() {
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1', completed: true, Date: '2023-10-01' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', completed: false, Date: '2023-10-02' },
  ];

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}
