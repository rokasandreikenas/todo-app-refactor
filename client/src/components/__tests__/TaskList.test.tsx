import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskList from "../TaskList";
import { mockTasks } from "../../mocks/task";

describe("TaskList", () => {
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

    const { getByText } = render(
      <TaskList tasks={mockTasks} onTaskComplete={mockOnTaskComplete} />
    );

    const task1 = getByText("Task 1");
    fireEvent.click(task1);

    expect(mockOnTaskComplete).toBeCalledWith(mockTasks[0]);
  });
});
