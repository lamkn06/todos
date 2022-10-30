import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Add } from "../components/Add";
import { Items } from "../components/Items";
import { selectDoneTask, selectInProcessTask } from "../store/task";

const MainPage = () => {
  const inProcessTasks = useSelector(selectInProcessTask);
  const doneTasks = useSelector(selectDoneTask);

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
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Heading size="lg" as="h2" mb={"10px"}>
              In-Process
            </Heading>
            <Items tasks={inProcessTasks} />
          </GridItem>
          <GridItem>
            <Heading size="lg" as="h2" mb={"10px"}>
              Done
            </Heading>
            <Items tasks={doneTasks} />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default MainPage;
