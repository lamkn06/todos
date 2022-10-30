import { ChatIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";

import { TaskType } from "../../types/task";
import { Item } from "./Item";

interface Props {
  tasks: TaskType[];
}

export const Items = (props: Props) => {
  const { tasks } = props;

  return (
    <>
      {tasks.length === 0 ? (
        <Box w="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Flex
            p="6"
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            fontSize={"xl"}
          >
            <ChatIcon />
            No Data
          </Flex>
        </Box>
      ) : (
        tasks.map((task, index) => (
          <Box mb={"10px"} key={task.id}>
            <Item task={task} index={index} />
          </Box>
        ))
      )}
    </>
  );
};
