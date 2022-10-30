import { Grid, GridItem, Text, VStack, Box, Container } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Add } from "../components/Add";
import { Items } from "../components/Items";
import { selectInProcessTask } from "../store/task";

const MainPage = () => {
  const inProcessTasks = useSelector(selectInProcessTask);

  return (
    <>
      <VStack p={10}>
        <Box>
          <Text
            bgGradient="linear(to-t,#224f51,  #8ad3d6)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Todo App
          </Text>

          <Add />
        </Box>
      </VStack>
      <Container maxW={"1024px"}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Items tasks={inProcessTasks} />
          </GridItem>
          <GridItem>
            <Items tasks={inProcessTasks} />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default MainPage;
