import {
  Box,
  Container,
  Img,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";
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
        maxW={"1024px"}
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
                    <div className="label">Days</div>
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
                    <div className="label">Hours</div>
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
                    <div className="label">Minutes</div>
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
                    <div className="label">Seconds</div>
                  </li>
                </ul>
              </>
            );
          }}
        />
        <List spacing={3} marginTop={"50px"}>
          <ListItem>
            <ListIcon as={RepeatClockIcon} color="red.500" />
            Lam Intern {"==>"} on Queue
          </ListItem>
          <ListItem>
            <ListIcon as={RepeatClockIcon} color="red.500" />
            Thang Bui {"==>"} on Queue
          </ListItem>
          <ListItem>
            <ListIcon as={RepeatClockIcon} color="red.500" />
            Cuong Huynh {"==>"} on Queue
          </ListItem>
          <ListItem>
            <ListIcon as={RepeatClockIcon} color="red.500" />
            Quan Van {"==>"} on Queue
          </ListItem>
          <ListItem>
            <ListIcon as={RepeatClockIcon} color="red.500" />
            Quan Pham {"==>"} on Queue
          </ListItem>
          <ListItem>
            <ListIcon as={RepeatClockIcon} color="red.500" />
            Kim Do {"==>"} on Queue
          </ListItem>
          <ListItem>
            <ListIcon as={RepeatClockIcon} color="red.500" />
            Bao Vu {"==>"} on Queue
          </ListItem>
        </List>
      </Container>
    </>
  );
};

export default MainPage;
