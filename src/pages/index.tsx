import { Box, Container, Text, VStack } from "@chakra-ui/react";
import { Add } from "../components/Add";
import { Content } from "../components/Contents";

const MainPage = () => {
  return (
    <>
      <VStack p={10}>
        <Box>
          <Text
            bgGradient="linear(to-r,#7928ca,  #ff0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Todo App
          </Text>
          <Add />
        </Box>
      </VStack>
      <Container maxW={"1024px"} display="flex" justifyContent={"center"}>
        <Content />
      </Container>
    </>
  );
};

export default MainPage;
