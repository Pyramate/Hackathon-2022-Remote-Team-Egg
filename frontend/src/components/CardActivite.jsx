import { useRef } from "react";
import {
  Popover,
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
  PopoverFooter,
  Container,
} from "@chakra-ui/react";

import emptyImage from "../assets/emptyImage.svg";

function CardActivite() {
  const initRef = useRef();
  return (
    <Container w="400px" mt="15rem">
      <Flex
        flexDirection="column"
        m="1rem"
        minH="500px"
        justifyContent="space-between"
      >
        <Popover
          Popover
          closeOnBlur={false}
          placement="top"
          initialFocusRef={initRef}
        >
          {({ isOpen, onClose }) => (
            <>
              <Flex
                flexDirection="column"
                align="center"
                minH="400px"
                border="1px"
                borderRadius="30px"
              >
                <Image
                  src={emptyImage}
                  alt=""
                  borderTopRadius="28px"
                  minW="100%"
                  h="18em"
                />
                <Heading>NOM ACTIVITE</Heading>
                <Flex justifyContent="space-around" w="100%">
                  <Text>Catégorie</Text>
                  <Text>Durée</Text>
                  <Text>Tranche d'âge</Text>
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
                  border="1px"
                  borderColor="black"
                  borderRadius="30px"
                  m="1rem"
                >
                  <PopoverHeader>
                    <Flex flexDirection="column" align="center">
                      <Image
                        src={emptyImage}
                        alt=""
                        borderTopRadius="28px"
                        minW="100%"
                        h="18em"
                      />
                      <Heading>NOM ACTIVITE</Heading>
                      <Flex
                        justifyContent="space-around"
                        flexWrap="wrap"
                        w="100%"
                        h="100px"
                      >
                        <Text
                          w="33%"
                          alignSelf="center"
                          align="center"
                          fontSize="xl"
                        >
                          Catégorie
                        </Text>
                        <Text w="33%" alignSelf="center" align="center">
                          Durée
                        </Text>
                        <Text w="33%" alignSelf="center" align="center">
                          Tranche d'âge
                        </Text>
                        <Text w="33%" alignSelf="center" align="center">
                          Créateur
                        </Text>
                        <Text w="33%" alignSelf="center" align="center">
                          Niveau
                        </Text>
                      </Flex>
                    </Flex>
                  </PopoverHeader>
                  <PopoverBody>
                    <Flex justifyContent="space-around">
                      <Text>
                        DETAILS : Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Dolores quod facilis molestias impedit
                        voluptate iure neque fugiat similique ipsum magnam ab
                        odio quis delectus rerum, magni nulla ipsam dolore. Nam!
                      </Text>
                    </Flex>
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
