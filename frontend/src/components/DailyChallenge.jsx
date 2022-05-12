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

export default function DailyChallenge({challenges}) {
const [isCliked, setIsClicked] = useState(false)

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
              {isCliked ? 
            <Button pointerEvents="none" fontSize={"xl"} colorScheme="teal" variant="outline">
              Challenge accompli!
            </Button> : null }

            <Heading
              fontSize={"3xl"}
              fontFamily={"body"}
              color={"purple.700"}
              pl={2}
            >
              Challenge du jour :
            </Heading>
            {/* {challenges.name} */}
            <Text
              fontSize={"xl"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            > Le challenge here!
             {/* {challenges.description} */}
            </Text>
            {/* {challenges.pointsScored} */}
            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Switch onChange={handleClick} colorScheme="purple" size="lg"></Switch>
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
