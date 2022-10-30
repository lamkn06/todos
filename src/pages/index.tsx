import { Grid, GridItem, Text, VStack, Box, Container } from "@chakra-ui/react";
import { Add } from "../components/Add";

const MainPage = () => {
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
          <GridItem w="100%" h="10" bg="blue.500" maxW={"400px"} />
          <GridItem w="100%" h="10" bg="blue.500" maxW={"400px"} />
        </Grid>
      </Container>
    </>
  );
};

export default MainPage;
