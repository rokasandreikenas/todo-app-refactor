import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskItem from "../TaskItem";

describe("TaskItem", () => {
  it("should render title correctly", () => {
    const mockTask = { title: "Test Task", done: false };
    render(
      <TaskItem
        title={mockTask.title}
        done={mockTask.done}
        onClick={jest.fn()}
      />
    );

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("should call onClick when active task is clicked", () => {
    const mockTask = { title: "Test Task", done: false };
    const mockOnClick = jest.fn();

    render(
      <TaskItem
        title={mockTask.title}
        done={mockTask.done}
        onClick={mockOnClick}
      />
    );

    fireEvent.click(screen.getByText("Test Task"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
