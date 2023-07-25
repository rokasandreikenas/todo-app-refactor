import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled.input`
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

const Input = (props: Props) => {
  return <StyledInput {...props} />;
};

export default Input;
