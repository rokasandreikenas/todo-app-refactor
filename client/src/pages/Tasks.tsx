import styled from "styled-components";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useCreateTask, useTasks, useUpdateTask } from "../hooks/task";
import { Task } from "../types/task";

const Total = styled.div`
  padding-top: 1rem;
  font-size: 1.2rem;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Tasks = () => {
  const { data } = useTasks();
  const { mutateAsync: createTask } = useCreateTask();
  const { mutateAsync: updateTask } = useUpdateTask();
  const tasks = data || [];

  const addTask = async (taskName: string) => {
    try {
      const newTask = { title: taskName, done: false };
      await createTask(newTask);
    } catch (error) {
      console.error(error);
    }
  };

  const completeTask = async (task: Task) => {
    try {
      await updateTask({ ...task, done: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <TaskForm onTaskAdd={addTask} />
      <TaskList tasks={tasks} onTaskComplete={completeTask} />
      <Total>Total tasks: {tasks.length}</Total>
    </Container>
  );
};

export default Tasks;
