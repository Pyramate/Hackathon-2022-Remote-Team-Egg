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

import {
  FaRegClock,
  FaAward,
  FaChild,
  FaClipboardList,
  FaUserEdit,
} from "react-icons/fa";

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
              <Avatar alignSelf="flex-start" size="lg" src={activity.userId} />
            </Flex>
            <Heading fontStyle="italic" alignSelf="center">
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
                <FaClipboardList size="30px" />
                <Text alignSelf="center" align="center" fontSize="2xl">
                  {activity.category}
                </Text>
              </Flex>
              <Flex gap="2" placeItems="center">
                <FaRegClock size="30px" />
                <Text alignSelf="center" align="center" fontSize="2xl">
                  {activity.duration}
                </Text>
              </Flex>
              <Flex gap="2" placeItems="center">
                <FaChild size="30px" />
                <Text alignSelf="center" align="center" fontSize="2xl">
                  {activity.ageGroup}
                </Text>
              </Flex>
            </Flex>
            <Button
              onClick={onOpen}
              colorScheme="purple"
              w="40%"
              alignSelf="center"
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
                    // src={user.avatarUrl}
                  />
                </Flex>
                <Text
                  fontStyle="italic"
                  alignSelf="center"
                  fontSize="7xl"
                  textShadow="2px 2px grey"
                >
                  {activity.name}
                </Text>
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
                <FaClipboardList size="60px" />
                <Text fontSize="4xl">{activity.category}</Text>
              </Flex>
              <Flex gap="5" placeItems="center">
                <FaChild size="60px" />
                <Text fontSize="4xl">{activity.ageGroup}</Text>
              </Flex>
              <Flex gap="5" placeItems="center">
                <FaRegClock size="60px" />
                <Text fontSize="4xl">{activity.duration}</Text>
              </Flex>
              <Flex gap="5" placeItems="center">
                <FaAward size="60px" />
                <Text fontSize="4xl">{activity.ecologicalLevel}</Text>
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
                border="1px"
                borderColor="#6E41E2"
                borderRadius="30px"
                boxShadow="dark-lg"
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
                border="1px"
                borderColor="#6E41E2"
                borderRadius="30px"
                boxShadow="dark-lg"
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
              color="white"
              onClick={onClose}
              fontSize="6xl"
              h="80px"
              w="500px"
              variant="solid"
              colorScheme="purple"
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
