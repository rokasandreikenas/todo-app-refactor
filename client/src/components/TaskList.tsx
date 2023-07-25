import { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  onTaskComplete: (index: number) => void;
}

const TaskList = ({ tasks, onTaskComplete }: Props) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          title={task.title}
          done={task.done}
          onClick={() => onTaskComplete(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;
