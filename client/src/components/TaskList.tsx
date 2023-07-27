import { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  onTaskComplete: (task: Task) => void;
}

const TaskList = ({ tasks, onTaskComplete }: Props) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          done={task.done}
          onClick={() => onTaskComplete(task)}
        />
      ))}
    </div>
  );
};

export default TaskList;
