import TaskItem from './itemTask.jsx';
import { useTasks } from '../../context/taskContext.jsx';
export default function TaskList({  }) {
  const { tasks } = useTasks();
  return (
    <ul className="list-group">
      {tasks.map(t => (
        <TaskItem key={t.id} task={t}  />
      ))}
    </ul>
  );
}
