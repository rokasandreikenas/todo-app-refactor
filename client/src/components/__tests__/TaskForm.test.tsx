import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskForm from "../TaskForm";

describe("TaskForm", () => {
  it("should call onTaskAdd with input value when form is submitted", async () => {
    const mockOnTaskAdd = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <TaskForm onTaskAdd={mockOnTaskAdd} />
    );

    const input = getByPlaceholderText("Enter task name");
    const button = getByText("Add Task");

    fireEvent.change(input, { target: { value: "New task" } });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(mockOnTaskAdd).toHaveBeenCalledWith("New task");
  });

  it("should not call onTaskAdd when input is empty", async () => {
    const mockOnTaskAdd = jest.fn();
    const { getByText } = render(<TaskForm onTaskAdd={mockOnTaskAdd} />);

    const button = getByText("Add Task");

    await act(async () => {
      fireEvent.click(button);
    });

    expect(mockOnTaskAdd).not.toHaveBeenCalled();
  });
});
