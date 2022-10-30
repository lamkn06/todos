import { Box, Badge, Text } from "@chakra-ui/react";
import { TaskType } from "../../types/task";

export const Item = (props: TaskType) => {
  const { status, name, description, createAt } = props;
  return (
    <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="green">
            {status}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {createAt.toDateString()}
          </Box>
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
      </Box>
    </Box>
  );
};
