import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../form/Button";

describe("Button", () => {
  it("renders without error", () => {
    const { container } = render(<Button>Test Button</Button>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders child text", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("fires onClick event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Test Button</Button>);
    fireEvent.click(screen.getByText(/Test Button/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
