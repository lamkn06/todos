import { Box, Container, Heading, Img, Text, VStack } from "@chakra-ui/react";
import Countdown from "react-countdown";

const MainPage = () => {
  const unofficialLayoffDay = "2025-06-30";

  return (
    <>
      <VStack p={10}>
        <Box>
          <Text
            bgGradient="linear(to-r,#00497a,  #00497a)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
          >
            <Img
              src="https://media.licdn.com/dms/image/v2/D5603AQEWlkEgrLbe5w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721887847947?e=1750896000&v=beta&t=sMjGY-mnJP6VA-52yfmSgzYcNUu_gq98zOc634w8v34"
              width={100}
            />
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
          date={new Date(unofficialLayoffDay)}
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
        <Heading my={4} color="tomato">
          Tạm Biệt Bé An
        </Heading>
      </Container>
    </>
  );
};

export default MainPage;
