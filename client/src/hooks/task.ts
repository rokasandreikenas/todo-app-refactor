import { createTask, deleteTasks, fetchTasks, updateTask } from "../api/task";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const TASKS = "TASKS";

export const useTasks = () => {
  return useQuery([TASKS], fetchTasks);
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS] });
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation(updateTask, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS] });
    },
  });
};

export const useDeleteTasks = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteTasks, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS] });
    },
  });
};
