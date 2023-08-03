import styled from "styled-components";
import toast from "react-hot-toast";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import {
  useCreateTask,
  useDeleteTasks,
  useTasks,
  useUpdateTask,
} from "../hooks/task";
import { Task } from "../types/task";
import Loader from "../components/Loader";
import Button from "../components/form/Button";

const Total = styled.div`
  padding-top: 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: flex-end;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Tasks = () => {
  const { data, isLoading: tasksLoading } = useTasks();
  const { mutateAsync: createTask, isLoading: isCreating } = useCreateTask();
  const { mutateAsync: updateTask, isLoading: isUpdating } = useUpdateTask();
  const { mutateAsync: deleteTasks, isLoading: isDeleting } = useDeleteTasks();
  const tasks = data || [];
  const isLoading = tasksLoading || isCreating || isUpdating || isDeleting;

  const addTask = async (taskName: string) => {
    try {
      const newTask = { title: taskName, done: false };
      await createTask(newTask);
      toast.success("Task added");
    } catch (error) {
      toast.error("Task was not added");
    }
  };

  const completeTask = async (task: Task) => {
    try {
      await updateTask({ ...task, done: true });
      toast.success("Task completed");
    } catch (error) {
      toast.error("Task was not updated");
    }
  };

  const deleteAllTasks = async () => {
    try {
      await deleteTasks();
      toast.success("Tasks deleted");
    } catch (error) {
      toast.error("Tasks were not deleted");
    }
  };

  return (
    <Container>
      <TaskForm onTaskAdd={addTask} isLoading={isLoading} />
      <TaskList tasks={tasks} onTaskComplete={completeTask} />
      <Actions>
        <Total>Total tasks: {isLoading ? <Loader /> : tasks.length}</Total>
        <Button
          variant="outlined"
          onClick={deleteAllTasks}
          disabled={!tasks.length}
        >
          Delete all
        </Button>
      </Actions>
    </Container>
  );
};

export default Tasks;
