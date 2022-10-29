import { Text, VStack } from "@chakra-ui/react";
import { Add } from "../components/Add";

const MainPage = () => {
  return (
    <VStack p={5}>
      <Text
        bgGradient="linear(to-l, #2C7A7B,#9ccccd)"
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
