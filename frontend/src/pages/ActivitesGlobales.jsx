import logoactivite from "../assets/bglogo.png";
import {
  Box,
  Container,
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import CarouselGlobalActivitiesPages from "../components/CarouselGlobalActivitiesPages";
import { Link } from "react-router-dom";

import background from "../assets/background.png";

export default function ActivitesGlobales() {
  return (
    <>
      <Box bgImage={background} bgRepeat="no-repeat" bgSize="cover">
        <Flex
          w={"full"}
          h={"60vh"}
          bgImage={logoactivite}
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
        >
          <VStack
            w={"full"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          >
            <Stack maxW={"2xl"} align={"flex-start"} spacing={35}>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                mt="15rem"
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor
              </Text>
              <Stack direction={"row"}>
                <Link to="#garden">
                  <Button
                    bg={"green.600"}
                    rounded={"full"}
                    color={"white"}
                    _hover={{ bg: "green.500" }}
                  >
                    Voir les activités
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </VStack>
        </Flex>

        <Flex mt="3rem" flexDirection="column">
          <Text
            color={"green.500"}
            fontSize={{ base: "sm", sm: "2xl" }}
            ml="5rem"
          >
            Recettes{" "}
          </Text>
          <CarouselGlobalActivitiesPages genre={"food"} />
        </Flex>
        <Flex mt="3rem" flexDirection="column">
          <Text
            color={"green.500"}
            fontSize={{ base: "sm", sm: "2xl" }}
            ml="5rem"
          >
            Cosmétiques{" "}
          </Text>
          <CarouselGlobalActivitiesPages genre={"Hygiène"} />
        </Flex>
        <Flex mt="3rem" flexDirection="column">
          <Text
            color={"green.500"}
            fontSize={{ base: "sm", sm: "2xl" }}
            ml="5rem"
          >
            Produits Entretiens{" "}
          </Text>
          <CarouselGlobalActivitiesPages genre={"Entretien"} />
        </Flex>
        <Flex mt="3rem" flexDirection="column">
          <Text
            color={"green.500"}
            fontSize={{ base: "sm", sm: "2xl" }}
            ml="5rem"
            id="garden"
          >
            Jardin{" "}
          </Text>
          <CarouselGlobalActivitiesPages genre={"Jardin"} />
        </Flex>
      </Box>
    </>
  );
}
