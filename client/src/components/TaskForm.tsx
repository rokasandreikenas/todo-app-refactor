import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../components/form/Button";
import FormikInput from "../components/formik/FormikInput";
import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem 0;
`;

const validationSchema = Yup.object().shape({
  taskName: Yup.string().required("Required"),
});

interface Props {
  onTaskAdd: (taskName: string) => void;
}

const TaskForm = ({ onTaskAdd }: Props) => {
  return (
    <Formik
      initialValues={{ taskName: "" }}
      validationSchema={validationSchema}
      onSubmit={({ taskName }, { resetForm }) => {
        onTaskAdd(taskName);
        resetForm({});
      }}
    >
      <StyledForm>
        <FormikInput name="taskName" placeholder="Enter task name" />
        <Button type="submit">Add Task</Button>
      </StyledForm>
    </Formik>
  );
};

export default TaskForm;
