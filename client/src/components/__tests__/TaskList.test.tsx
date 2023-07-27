import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskList from "../TaskList";

describe("TaskList", () => {
  const mockTasks = [
    { title: "Task 1", done: false },
    { title: "Task 2", done: false },
    { title: "Task 3", done: true },
  ];

  it("should render all tasks", () => {
    const { getByText } = render(
      <TaskList tasks={mockTasks} onTaskComplete={jest.fn()} />
    );

    mockTasks.forEach((task) => {
      expect(getByText(task.title)).toBeInTheDocument();
    });
  });

  it("should call onTaskComplete with correct index when task is clicked", () => {
    const mockOnTaskComplete = jest.fn();

    const { getAllByText } = render(
      <TaskList tasks={mockTasks} onTaskComplete={mockOnTaskComplete} />
    );

    fireEvent.click(getAllByText(/Task/)[0]);

    expect(mockOnTaskComplete).toHaveBeenCalledWith(0);
  });
});
