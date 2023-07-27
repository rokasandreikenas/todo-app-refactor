import axios from "axios";
import { Task, NewTask } from "../types/task";

const API = "http://localhost:3000";

export const fetchTasks = async (): Promise<Task[]> => {
  const res = await axios.get(`${API}/tasks`);
  return res.data;
};

export const createTask = async (task: NewTask): Promise<Task> => {
  const response = await axios.post(`${API}/tasks`, task);
  return response.data;
};

export const updateTask = async (task: Task): Promise<Task> => {
  const { id, ...updatingTask } = task;
  const response = await axios.put(`${API}/tasks/${id}`, updatingTask);
  return response.data;
};
