import { useField } from "formik";
import styled from "styled-components";
import Input from "../form/Input";

interface Props {
  name: string;
  placeholder?: string;
}

const ErrorText = styled.div`
  color: red;
`;

const FormikInput = ({ name, ...props }: Props) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <Input {...field} {...props} />
      {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    </div>
  );
};

export default FormikInput;
