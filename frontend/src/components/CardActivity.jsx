import {
  Button,
  Box,
  Avatar,
  Heading,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaRegClock, FaAward, FaChild, FaClipboardList } from "react-icons/fa";

function CardActivity({ activity }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex flexDirection="column" h="500px">
      <Flex
        bgColor="white"
        flexDirection="column"
        align="center"
        h="450px"
        w="400px"
        borderRadius="lg"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
      >
        <Box
          h="40%"
          w="100%"
          borderRadius="lg"
          bgImage={activity.pictureActivity}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPos="center"
        >
          <Flex
            h="290px"
            mt="9em"
            gap="2"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Flex gap="6" ml="1rem">
              <Avatar
                border="2px solid white"
                alignSelf="flex-start"
                size="lg"
                src={activity.userId}
              />
            </Flex>
            <Heading fontFamily={"body"} fontSize="3xl" alignSelf="center">
              {activity.name}
            </Heading>
            <Flex
              justifyContent="space-around"
              w="90%"
              alignSelf="center"
              flexWrap="wrap"
              gap="2"
            >
              <Flex gap="2" placeItems="center">
                <FaClipboardList color="#6E41E2" size="30px" />
                <Text
                  fontFamily={"body"}
                  alignSelf="center"
                  align="center"
                  fontSize={"xl"}
                  color={useColorModeValue("gray.700", "gray.400")}
                >
                  {activity.category}
                </Text>
              </Flex>
              <Flex gap="2" placeItems="center">
                <FaRegClock color="#6E41E2" size="30px" />
                <Text
                  fontFamily={"body"}
                  alignSelf="center"
                  align="center"
                  fontSize={"xl"}
                  color={useColorModeValue("gray.700", "gray.400")}
                >
                  {activity.duration}
                </Text>
              </Flex>
              <Flex gap="2" placeItems="center">
                <FaChild color="#6E41E2" size="30px" />
                <Text
                  fontFamily={"body"}
                  alignSelf="center"
                  align="center"
                  fontSize={"xl"}
                  color={useColorModeValue("gray.700", "gray.400")}
                >
                  {activity.ageGroup}
                </Text>
              </Flex>
            </Flex>
            <Button
              fontFamily={"body"}
              borderRadius="lg"
              onClick={onOpen}
              colorScheme="purple"
              w="40%"
              alignSelf="center"
              fontSize={"md"}
            >
              Voir plus de détails
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader p="0">
            <Box
              bgImage={activity.pictureActivity}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPos="center"
            >
              <Flex h="30vh" gap="5" flexDirection="column">
                <Flex mt="25vh" w="100%" gap="10" ml="1rem">
                  <Avatar
                    alignSelf="flex-start"
                    size="2xl"
                    border="3px solid white"
                    src={activity.userId}
                  />
                </Flex>
                <Heading
                  alignSelf="center"
                  fontSize={"6xl"}
                  fontFamily={"body"}
                >
                  {activity.name}
                </Heading>
              </Flex>
            </Box>
          </ModalHeader>
          <ModalCloseButton color="white" size="lg" />
          <ModalBody
            mt="18vh"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Flex justifyContent="space-around" w="100%" flexWrap="wrap">
              <Flex gap="5" placeItems="center">
                <FaClipboardList color="#6E41E2" size="60px" />
                <Text fontSize={"4xl"} fontFamily={"body"}>
                  {activity.category}
                </Text>
              </Flex>
              <Flex gap="5" placeItems="center">
                <FaChild color="#6E41E2" size="60px" />
                <Text fontSize={"4xl"} fontFamily={"body"}>
                  {activity.ageGroup}
                </Text>
              </Flex>
              <Flex gap="5" placeItems="center">
                <FaRegClock color="#6E41E2" size="60px" />
                <Text fontSize={"4xl"} fontFamily={"body"}>
                  {activity.duration}
                </Text>
              </Flex>
              <Flex gap="5" placeItems="center">
                <FaAward color="#6E41E2" size="60px" />
                <Text fontSize={"4xl"} fontFamily={"body"}>
                  {activity.ecologicalLevel}
                </Text>
              </Flex>
            </Flex>

            <Flex
              h="40%"
              flexDirection={{ base: "column", xl: "row" }}
              alignItems={{ base: "center", xl: "initial" }}
            >
              <Flex
                w={{ base: "90%", xl: "100%" }}
                m="1rem"
                p="2rem"
                borderRadius="lg"
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                justifyContent="flex-start"
                flexDirection="column"
                gap="3"
              >
                <Heading>Matériels : </Heading>
                <Text alignSelf="flex-start" fontSize="2xl">
                  {activity.requirements}
                </Text>
              </Flex>
              <Flex
                w={{ base: "90%", xl: "100%" }}
                m="1rem"
                p="2rem"
                borderRadius="lg"
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                flexDirection="column"
                justifyContent="flex-start"
                gap="3"
              >
                <Heading>Détails : </Heading>
                <Text alignSelf="flex-start" fontSize="2xl">
                  {activity.description}
                </Text>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter alignSelf="center">
            <Button
              onClick={onClose}
              fontSize="5xl"
              h="60px"
              w="300px"
              variant="solid"
              colorScheme="purple"
              pb="0.5rem"
            >
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default CardActivity;
