import React from "react";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Switch,
} from "@chakra-ui/react";
import dailyChallenge from "../assets/dailychallenge.png";

export default function DailyChallenge() {
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
          padding={4}
        >
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="space-around"
            pt={4}
          >
            <Heading fontSize={"3xl"} fontFamily={"body"} color={"purple.700"} pl={2}>
              Challenge du jour
            </Heading>
            <Text
            fontSize={"l"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              Aujourd'hui, déplace-toi seulement à pieds ou à vélo
            </Text>
            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Switch colorScheme="purple" size="lg"></Switch>
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
