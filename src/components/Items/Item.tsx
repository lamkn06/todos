import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Badge, Text } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { selectTask } from "../../store/task";
import { TaskType } from "../../types/task";
import { Edit } from "../Edit";

interface Props {
  task: TaskType;
}

export const Item = (props: Props) => {
  const { status, name, description, createAt } = props.task;
  const dispatch = useDispatch();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEdit = useCallback(
    (task: TaskType) => {
      dispatch(selectTask(task));
      setIsEditModalOpen(true);
    },
    [dispatch],
  );

  return (
    <>
      <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="green">
              {status}
            </Badge>
          </Box>
          <Box color="gray.500" letterSpacing="wide" fontSize="xs" mt="2">
            Created At: <strong>{new Date(createAt).toDateString()}</strong>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {name}
          </Box>

          {description ? (
            <Box>
              <Text>doiwjdioawjio</Text>
            </Box>
          ) : null}
          <Box display="flex" mt="10" alignItems="center">
            <DeleteIcon
              color="red.500"
              mr="2"
              cursor={"pointer"}
              onClick={() => undefined}
            />
            <EditIcon
              cursor={"pointer"}
              onClick={() => handleEdit(props.task)}
            />
          </Box>
        </Box>
      </Box>
      <Edit
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
    </>
  );
};
