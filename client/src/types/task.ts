export type NewTask = {
  title: string;
  done: boolean;
};

export interface Task extends NewTask {
  id: string;
}
