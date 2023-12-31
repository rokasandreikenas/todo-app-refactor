import styled from "styled-components";

interface Props {
  title: string;
  done: boolean;
  onClick: () => void;
}

const Active = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-weight: bold;
`;

const Done = styled.div`
  text-decoration: line-through;
`;

const TaskItem = ({ title, done, onClick }: Props) => {
  return done ? (
    <Done>{title}</Done>
  ) : (
    <Active onClick={onClick}>{title}</Active>
  );
};

export default TaskItem;
