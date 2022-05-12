import React, { useState } from "react";
import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Switch,
  Button,
} from "@chakra-ui/react";
import dailyChallenge from "../assets/dailychallenge.png";

export default function DailyChallenge({ challenges }) {
  const [isCliked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isCliked);
  }

  return (
    <div>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "800px" }}
          height={{ sm: "476px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          padding={2}
        >
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="space-around"
            pt={2}
          >
            {isCliked ? (
              <Button
                pointerEvents="none"
                fontSize={"xl"}
                colorScheme="teal"
                variant="outline"
              >
                Félicitations, challenge accompli!
              </Button>
            ) : null}

            <Heading
              fontSize={"3xl"}
              fontFamily={"body"}
              color={"purple.700"}
              pl={2}
            >
              {/* {challenges.name} */}
              Challenge du jour :
            </Heading>

            <Text
              fontSize={"xl"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              {" "}
              Le challenge here!
              {/* {challenges.description} */}
            </Text>
            <Text
              fontSize={"l"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              {" "}
              Ce challenge pourrait te rapporter :
              {/* {challenges.pointsScored} */}
            </Text>

            <Stack
              width={"100%"}
              direction={"row"}
              px={3}
              alignItems={"center"}
            >
              <Text>Challenge accompli ?</Text>
              <Switch
                onChange={handleClick}
                colorScheme="purple"
                size="lg"
              ></Switch>
            </Stack>
          </Stack>
          <Flex flex={1}>
            <Image objectFit="cover" boxSize="100%" src={dailyChallenge} />
          </Flex>
        </Stack>
      </Center>
    </div>
  );
}
