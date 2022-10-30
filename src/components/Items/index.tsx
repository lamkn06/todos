import { Box } from "@chakra-ui/react";

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
        <Box mb={"10px"} key={task.id}>
          <Item task={task} />
        </Box>
      ))}
    </>
  );
};
