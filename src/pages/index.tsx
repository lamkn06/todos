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

function getRiskColor(riskPercentage: number) {
  const riskColors = ["green", "blue", "yellow", "orange", "red"];

  const riskLevel = Math.ceil((riskPercentage * 5) / 100);

  return `${riskColors.at(riskLevel - 1)}.400`;
}

const MainPage = () => {
  const dataflowNFQContractors = [
    {
      name: "True Profile",
      label: "TP's team",
      members: [
        {
          name: "Lam Intern",
          riskPercentage: 99,
        },
        {
          name: "Thang Bui",
          riskPercentage: 99,
        },
        {
          name: "Cuong Huynh",
          riskPercentage: 99,
        },
        {
          name: "Quan Van",
          riskPercentage: 95,
        },
        {
          name: "Quan Pham",
          riskPercentage: 5,
        },
        {
          name: "Kim Do",
          riskPercentage: 5,
        },
        {
          name: "Bao Vu",
          riskPercentage: 70,
        },
        {
          name: "Vien Pham",
          riskPercentage: 5,
        },
        {
          name: "Linh Nguyen",
          riskPercentage: 90,
        },
      ],
    },
    {
      name: "Digiflow",
      label: "DF's team",
      members: [
        {
          name: "Lam NC",
          riskPercentage: 90,
        },
        {
          name: "Thao Nguyen",
          riskPercentage: 90,
        },
        {
          name: "Cuong Ho",
          riskPercentage: 90,
        },
      ],
    },
  ];

  const unofficialLayoffDay = "2023-09-30";

  const title = "Risk of Layoff: Lower is better";

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
          {title}
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={32}>
          {dataflowNFQContractors.map((team) => (
            <GridItem>
              <Heading mb={4}>{team.label}</Heading>
              <List spacing={3} marginTop={"50px"}>
                {team.members.map((member, i) => (
                  <ListItem key={`team-member-${member.name}-${i}`}>
                    <CircularProgress
                      value={member.riskPercentage}
                      color={getRiskColor(member.riskPercentage)}
                      marginRight={"15px"}
                    >
                      <CircularProgressLabel>
                        {member.riskPercentage}%
                      </CircularProgressLabel>
                    </CircularProgress>
                    {member.name}
                  </ListItem>
                ))}
              </List>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MainPage;
