import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Grid,
  GridItem,
  Heading,
  Img,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Countdown from "react-countdown";

const MainPage = () => {
  return (
    <>
      <VStack p={10}>
        <Box>
          <Text
            bgGradient="linear(to-r,#00497a,  #00497a)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            <Img src="https://www.trueprofile.io/_next/static/images/logo-blue-fd70ec0ee0aec283e82090abf80048ca.svg" />
          </Text>
        </Box>
      </VStack>
      <Container
        maxW={"1280px"}
        display="flex"
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Countdown
          date={new Date("2023-11-30")}
          renderer={(props) => {
            const { days, hours, minutes, seconds } = props;
            return (
              <>
                <ul id="countdown">
                  <li id="days">
                    <div className="number">
                      <Text
                        bgGradient="linear(to-r,#00497a,  #00497a)"
                        bgClip="text"
                      >
                        {days}
                      </Text>
                    </div>
                    <Text fontSize="50px" color="#adafb2">
                      Days
                    </Text>
                  </li>
                  <li id="hours">
                    <div className="number">
                      <Text
                        bgGradient="linear(to-r,#00497a,  #00497a)"
                        bgClip="text"
                      >
                        {hours}
                      </Text>
                    </div>

                    <Text fontSize="50px" color="#adafb2">
                      Hours
                    </Text>
                  </li>
                  <li id="minutes">
                    <div className="number">
                      <Text
                        bgGradient="linear(to-r,#00497a,  #00497a)"
                        bgClip="text"
                      >
                        {minutes}
                      </Text>
                    </div>
                    <Text fontSize="50px" color="#adafb2">
                      Minutes
                    </Text>
                  </li>
                  <li id="seconds">
                    <div className="number">
                      <Text
                        bgGradient="linear(to-r,#00497a,  #00497a)"
                        bgClip="text"
                      >
                        {seconds}
                      </Text>
                    </div>
                    <Text fontSize="50px" color="#adafb2">
                      Seconds
                    </Text>
                  </li>
                </ul>
              </>
            );
          }}
        />
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={2}>
            <Heading mb={4}>TP's team</Heading>
            <List spacing={3} marginTop={"50px"}>
              <ListItem>
                <CircularProgress
                  value={80}
                  color="green.400"
                  marginRight={"15px"}
                >
                  <CircularProgressLabel>80%</CircularProgressLabel>
                </CircularProgress>
                Lam Intern
              </ListItem>
              <ListItem>
                <CircularProgress
                  value={40}
                  color="green.400"
                  marginRight={"15px"}
                >
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
                Thang Bui
              </ListItem>
              <ListItem>
                <CircularProgress
                  value={90}
                  color="green.400"
                  marginRight={"15px"}
                >
                  <CircularProgressLabel>90%</CircularProgressLabel>
                </CircularProgress>
                Cuong Huynh
              </ListItem>
              <ListItem>
                <CircularProgress
                  value={40}
                  color="green.400"
                  marginRight={"15px"}
                >
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
                Quan Van
              </ListItem>
              <ListItem>
                <CircularProgress
                  value={10}
                  color="green.400"
                  marginRight={"15px"}
                >
                  <CircularProgressLabel>10%</CircularProgressLabel>
                </CircularProgress>
                Quan Pham
              </ListItem>
              <ListItem>
                <CircularProgress
                  value={5}
                  color="green.400"
                  marginRight={"15px"}
                >
                  <CircularProgressLabel>5%</CircularProgressLabel>
                </CircularProgress>
                Kim Do
              </ListItem>
              <ListItem>
                <CircularProgress
                  value={90}
                  color="green.400"
                  marginRight={"15px"}
                >
                  <CircularProgressLabel>90%</CircularProgressLabel>
                </CircularProgress>
                Bao Vu
              </ListItem>
              <ListItem>
                <CircularProgress
                  value={10}
                  color="green.400"
                  marginRight={"15px"}
                >
                  <CircularProgressLabel>10%</CircularProgressLabel>
                </CircularProgress>
                Vien Pham
              </ListItem>
              <ListItem>
                <CircularProgress
                  value={40}
                  color="green.400"
                  marginRight={"15px"}
                >
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
                Linh Nguyen
              </ListItem>
            </List>
          </GridItem>
          <GridItem colStart={4} colEnd={6} h="10">
            <Heading mb={4}>DF's team</Heading>
            <List spacing={3} marginTop={"50px"}>
              <ListItem>
                <CircularProgress
                  value={40}
                  color="red.400"
                  marginRight={"15px"}
                >
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
                Lam NC
              </ListItem>

              <ListItem>
                <CircularProgress
                  value={40}
                  color="red.400"
                  marginRight={"15px"}
                >
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
                Thao Nguyen
              </ListItem>
              <ListItem>
                <CircularProgress
                  value={40}
                  color="red.400"
                  marginRight={"15px"}
                >
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
                Cuong Ho
              </ListItem>
            </List>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default MainPage;
