import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "contained" | "outlined";
}

const StyledButton = styled.button<Props>`
  color: ${(props) => (props.variant === "outlined" ? "#007bff" : "#fff")};
  background-color: ${(props) =>
    props.variant === "outlined" ? "#fff" : "#007bff"};
  border: 1px solid #007bff;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.variant === "outlined" ? "#f8f9fa" : "#0069d9"};
    border-color: #0062cc;
  }
  &:disabled {
    color: #fff;
    background-color: grey;
    border-color: grey;
  }
`;

const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
