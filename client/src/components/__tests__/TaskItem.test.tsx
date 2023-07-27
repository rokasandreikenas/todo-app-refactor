import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskItem from "../TaskItem";
import { mockTasks } from "../../mocks/task";

describe("TaskItem", () => {
  it("should render title correctly", () => {
    const mockTask = mockTasks[0];
    render(
      <TaskItem
        title={mockTask.title}
        done={mockTask.done}
        onClick={jest.fn()}
      />
    );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
  });

  it("should call onClick when active task is clicked", () => {
    const mockTask = mockTasks[0];
    const mockOnClick = jest.fn();

    render(
      <TaskItem
        title={mockTask.title}
        done={mockTask.done}
        onClick={mockOnClick}
      />
    );

    fireEvent.click(screen.getByText("Task 1"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
