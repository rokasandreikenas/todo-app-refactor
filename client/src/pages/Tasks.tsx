import { useState } from "react";
import styled from "styled-components";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { initialTasks } from "./data";

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
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (taskName: string) => {
    const newTask = { title: taskName, done: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (index: number) => {
    setTasks((tasks) =>
      tasks.map((task, idx) => (idx === index ? { ...task, done: true } : task))
    );
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
