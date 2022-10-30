import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectInProcessTask } from "../../store/task";
import { TaskType } from "../../types/task";
import { Item } from "./Item";

interface Props {
  tasks: TaskType[];
}

export const Items = (props: Props) => {
  const { tasks } = props;

  return (
    <>
      {tasks.map((task) => (
        <Box mb={"10px"}>
          <Item {...task} key={task.id} />
        </Box>
      ))}
    </>
  );
};
