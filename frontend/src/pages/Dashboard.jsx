import { Box, Flex, Container, Spacer, Text } from "@chakra-ui/react";
import Background from "../assets/background.png";

import DailyChallenge from "../components/DailyChallenge";
import Header from "../components/Header";
import WelcomeCard from "../components/WelcomeCard";
import CardEvent from "../components/CardEvent";

export default function Dashboard(users, anEvent) {
  return (
    <>
      <Box
        bgImage={Background}
        bgRepeat="no-repeat"
        bgSize="cover"
        minH="100vh"
      >
        <Header />
        <Flex m="3rem">
          <Box w="40rem" mr="10rem">
            <WelcomeCard users={users} />
          </Box>
          <Box w="60rem">
            <DailyChallenge />
          </Box>
        </Flex>
        <Flex m="5rem">
          <Box w="40vw">
            <Text color={"green.500"} fontSize={{ base: "sm", sm: "2xl" }}>
              Activiés faites{" "}
            </Text>
          </Box>

          <Box>
            <Text color={"green.500"} fontSize={{ base: "sm", sm: "2xl" }}>
              Activiés proposés{" "}
            </Text>
          </Box>
        </Flex>
        <Flex m="5rem">
          <Box w="40vw">
            <CardEvent anEvent={anEvent} />
          </Box>
          <Box w="40vw">
            <CardEvent anEvent={anEvent} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
