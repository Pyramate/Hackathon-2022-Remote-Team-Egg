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
} from "@chakra-ui/react";

import activityCookies from "../assets/activityCookies.png";

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex flexDirection="column" h="500px">
      <Flex
        flexDirection="column"
        align="center"
        h="400px"
        w="450px"
        border="1px"
        borderRadius="30px"
        boxShadow={"2xl"}
      >
        <Box
          h="40%"
          w="100%"
          borderTopRadius="30px"
          bgImage={activityCookies}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPos="center"
        >
          <Flex
            h="280px"
            mt="7em"
            gap="2"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Avatar alignSelf="flex-start" size="lg" />
            <Heading fontStyle="italic" alignSelf="center">
              NOM ACTIVITE
            </Heading>
            <Flex justifyContent="space-around" w="100%" alignSelf="flex-end">
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
              bgImage={activityCookies}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPos="center"
            >
              <Flex h="40vh" gap="2" flexDirection="column">
                <Flex mt="18vh" w="50%" gap="10">
                  <Avatar alignSelf="flex-start" size="2xl" />
                  <Text alignSelf="center" fontSize="6xl" color="purple">
                    NOM FAMILLE
                  </Text>
                </Flex>
                <Heading fontStyle="italic" alignSelf="center" size="4xl">
                  NOM ACTIVITE
                </Heading>
              </Flex>
            </Box>
          </ModalHeader>
          <ModalCloseButton color="white" size="lg" />
          <ModalBody mt="18vh">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              at pariatur sed autem tempora similique quas molestias eos
              deserunt, ut veritatis nihil in rem mollitia aliquid itaque
              quisquam praesentium veniam!
            </Text>
          </ModalBody>

          <ModalFooter alignSelf="center">
            <Button
              color="#6E41E2"
              onClick={onClose}
              fontSize="6xl"
              h="100px"
              w="500px"
            >
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default BasicUsage;
