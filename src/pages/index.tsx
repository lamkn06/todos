import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
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
        <Box></Box>
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
            💌 CHO
          </Heading>
          <VStack spacing={6} align="start" w="full">
            <Box>
              <Text>🌟 Chief Happiness Officer,</Text>
              <Text fontSize="sm"></Text>
              <Text>Wow wow wow</Text>
            </Box>
            <Divider />
          </VStack>
        </Box>
      </Container>
      <div style={{ visibility: "hidden" }}>
        <iframe
          title="SoundCloud Player"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/gunk-wah-putra/cinema-sins-background-song&color=%23ff5500&auto_play=true&loop=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </div>
    </Box>
  );
};

export default MainPage;
