import { useRef } from "react";
import {
  Popover,
  Avatar,
  Heading,
  Flex,
  Button,
  Text,
  PopoverTrigger,
  Image,
  Portal,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Container,
  Stack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

import dailyChallenge from "../assets/dailychallenge.png";

function CardActivite() {
  const initRef = useRef();
  return (
    <Container w="600px" mt="15rem">
      <Flex
        flexDirection="column"
        m="1rem"
        minH="500px"
        w="450px"
        justifyContent="space-around"
      >
        <Popover
          Popover
          closeOnBlur={false}
          placement="top"
          initialFocusRef={initRef}
        >
          {({ isOpen }) => (
            <>
              <Flex
                flexDirection="column"
                align="center"
                minH="400px"
                w="450px"
                border="1px"
                borderRadius="30px"
                justifyContent="space-between"
              >
                <Image
                  src={dailyChallenge}
                  alt=""
                  borderTopRadius="28px"
                  minW="100%"
                  h="15em"
                />
                <Flex justifyContent="space-around" w="100%">
                  <Avatar alignSelf="flex-end">BLa</Avatar>
                  <Heading fontStyle="bold">NOM ACTIVITE</Heading>
                </Flex>
                <Flex justifyContent="space-around" w="100%" m="auto">
                  <Text
                    alignSelf="center"
                    align="center"
                    fontSize="2xl"
                    color="#6E41E2"
                  >
                    Catégorie
                  </Text>
                  <Text
                    alignSelf="center"
                    align="center"
                    fontSize="2xl"
                    color="#6E41E2"
                  >
                    Durée
                  </Text>
                  <Text
                    alignSelf="center"
                    align="center"
                    fontSize="2xl"
                    color="#6E41E2"
                  >
                    Tranche d'âge
                  </Text>
                </Flex>
              </Flex>
              <PopoverTrigger>
                <Button w="50%" alignSelf="center">
                  Voir {isOpen ? "moins" : "plus"} de détails
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  justifyContent="space-around"
                  h="600px"
                  w="600px"
                  mb="0.5rem"
                  border="2px"
                  borderColor="black"
                  borderRadius="30px"
                  m="1rem"
                >
                  <PopoverHeader>
                    <Flex flexDirection="column" align="center">
                      <Flex>
                        <Image
                          src={dailyChallenge}
                          alt=""
                          borderTopRadius="28px"
                          minW="50%"
                          h="15em"
                        />
                        <Heading alignSelf="center" align="center">
                          NOM ACTIVITE
                        </Heading>
                      </Flex>
                      <Flex justifyContent="space-around" w="100%" h="40px">
                        <Text
                          alignSelf="center"
                          align="center"
                          fontSize="2xl"
                          color="#6E41E2"
                        >
                          Catégorie
                        </Text>
                        <Text
                          alignSelf="center"
                          align="center"
                          fontSize="2xl"
                          color="#6E41E2"
                        >
                          Durée
                        </Text>
                        <Text
                          alignSelf="center"
                          align="center"
                          fontSize="2xl"
                          color="#6E41E2"
                        >
                          Tranche d'âge
                        </Text>
                      </Flex>
                      <Flex justifyContent="space-around" w="100%" h="40px">
                        <Text
                          alignSelf="center"
                          align="center"
                          fontSize="2xl"
                          color="#6E41E2"
                        >
                          Créateur
                        </Text>
                        <Text
                          alignSelf="center"
                          align="center"
                          fontSize="2xl"
                          color="#6E41E2"
                        >
                          Niveau
                        </Text>
                      </Flex>
                    </Flex>
                  </PopoverHeader>
                  <PopoverBody
                    w="99%"
                    h="40%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <CheckboxGroup>
                      Matériels nécessaires :
                      <Stack spacing="1" direction="column">
                        <Checkbox colorScheme="purple">Matériel 1</Checkbox>
                        <Checkbox colorScheme="purple">Matériel 2</Checkbox>
                        <Checkbox colorScheme="purple">Matériel 3</Checkbox>
                      </Stack>
                    </CheckboxGroup>
                    <Text>
                      DETAILS : Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Dolores quod facilis molestias impedit
                      voluptate iure neque fugiat similique ipsum magnam ab odio
                      quis delectus rerum, magni nulla ipsam dolore. Nam!
                    </Text>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </>
          )}
        </Popover>
      </Flex>
    </Container>
  );
}

export default CardActivite;
