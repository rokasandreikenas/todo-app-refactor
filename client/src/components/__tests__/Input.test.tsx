import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../form/Input";

describe("Input", () => {
  it("renders without error", () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("updates on change", () => {
    let value = "";
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      value = e.target.value;
    };
    render(<Input value={value} onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Test input" },
    });
    expect(value).toBe("Test input");
  });
});
