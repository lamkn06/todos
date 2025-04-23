import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Countdown from "react-countdown";

// Rainbow blinking effect
const blinkRainbow = keyframes`
 0% { background-color: red; }
  20% { background-color: orange; }
  40% { background-color: yellow; }
  60% { background-color: green; }
  80% { background-color: blue; }
  100% { background-color: violet; }
`;

const bgBlinkStyle = {
  animation: `${blinkRainbow} 3s infinite`,
};

const MainPage = () => {
  const unofficialLayoffDay = "2025-06-30";

  // Create snowflake animation elements
  const snowflakes = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100 + "%",
    duration: Math.random() * 10 + 5 + "s",
    delay: Math.random() * 10 + "s",
  }));

  return (
    <Box sx={bgBlinkStyle} minHeight="100vh" w="100vw" overflowX={"hidden"}>
      {/* ❄ Snowflake elements */}
      {snowflakes.map((flake) => (
        <Text
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: flake.duration,
            animationDelay: flake.delay,
          }}
        >
          ❄
        </Text>
      ))}

      <VStack p={10}>
        <Box>
          <Img
            src="https://media.licdn.com/dms/image/v2/D5603AQEWlkEgrLbe5w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721887847947?e=1750896000&v=beta&t=sMjGY-mnJP6VA-52yfmSgzYcNUu_gq98zOc634w8v34"
            width={200}
            borderRadius="full"
            mx="auto"
          />
        </Box>
      </VStack>

      <Container
        maxW={"1280px"}
        display="flex"
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        boxSizing="border-box"
      >
        <Countdown
          date={new Date(unofficialLayoffDay)}
          renderer={({ days, hours, minutes, seconds }) => (
            <Flex
              as="ul"
              id="countdown"
              w="100%"
              boxSizing="border-box"
              justify={["space-between", "flex-start"]}
              gap={["0", "40px"]}
            >
              <li id="days">
                <Text
                  bgGradient="linear(to-r,#00497a,#00497a)"
                  bgClip="text"
                  fontSize="4xl"
                >
                  {days}
                </Text>
                <Text fontSize="lg" color="#adafb2">
                  Days
                </Text>
              </li>
              <li id="hours">
                <Text
                  bgGradient="linear(to-r,#00497a,#00497a)"
                  bgClip="text"
                  fontSize="4xl"
                >
                  {hours}
                </Text>
                <Text fontSize="lg" color="#adafb2">
                  Hours
                </Text>
              </li>
              <li id="minutes">
                <Text
                  bgGradient="linear(to-r,#00497a,#00497a)"
                  bgClip="text"
                  fontSize="4xl"
                >
                  {minutes}
                </Text>
                <Text fontSize="lg" color="#adafb2">
                  Minutes
                </Text>
              </li>
              <li id="seconds">
                <Text
                  bgGradient="linear(to-r,#00497a,#00497a)"
                  bgClip="text"
                  fontSize="4xl"
                >
                  {seconds}
                </Text>
                <Text fontSize="lg" color="#adafb2">
                  Seconds
                </Text>
              </li>
            </Flex>
          )}
        />

        <Heading my={8} color="tomato">
          Tạm Biệt Bé An
        </Heading>

        {/* NFQ Experience Section */}
        <Box w="full" paddingBottom={4}>
          <Heading size="lg" mb={4}>
            💌 NFQ Career Timeline
          </Heading>
          <VStack spacing={6} align="start" w="full">
            <Box>
              <Text>🌟 Chief Executive Officer, NFQ Vietnam</Text>
              <Text fontSize="sm">Aug 2023 – Present · Vietnam · On-site</Text>
              <Text>
                Leading 800+ pros across 7 countries. Top-rated tech company in
                Vietnam (2019–2023).
              </Text>
            </Box>
            <Divider />
            <Box>
              <Text>📈 Chief Operating Officer, NFQ Asia</Text>
              <Text fontSize="sm">Nov 2020 – Aug 2023</Text>
            </Box>
            <Divider />
            <Box>
              <Text>😊 Chief Happiness Officer, NFQ Asia</Text>
              <Text fontSize="sm">Feb 2018 – Nov 2020</Text>
              <Text>Built a culture of brilliance & tech growth.</Text>
            </Box>
            <Divider />
            <Box>
              <Text>🛠️ Project Manager, NFQ Asia</Text>
              <Text fontSize="sm">Nov 2016 – Jan 2018</Text>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default MainPage;
