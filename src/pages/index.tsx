import { Text, VStack } from "@chakra-ui/react";
import { Add } from "../components/Add";

const MainPage = () => {
  return (
    <VStack p={5}>
      <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Todo App
      </Text>

      <Add />
    </VStack>
  );
};

export default MainPage;
