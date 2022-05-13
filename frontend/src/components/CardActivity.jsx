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
  Image,
} from "@chakra-ui/react";

import createurDeContenu from "../assets/createur-de-contenu.png";
import enfants from "../assets/enfants.png";
import histoire from "../assets/histoire.png";
import liste from "../assets/liste.png";
import niveau from "../assets/niveau-superieur.png";

function CardActivity({ activity }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex flexDirection="column" h="500px">
      <Flex
        flexDirection="column"
        align="center"
        h="450px"
        w="400px"
        border="1px"
        borderRadius="32px"
        boxShadow={"2xl"}
      >
        <Box
          h="40%"
          w="100%"
          borderTopRadius="30px"
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
                alignSelf="flex-start"
                size="lg"
                // src={user.avatarUrl}
              />
            </Flex>
            <Heading fontStyle="italic" alignSelf="center">
              {activity.name}
              NOM ACTIVITE
            </Heading>
            <Flex
              justifyContent="space-around"
              w="90%"
              alignSelf="center"
              flexWrap="wrap"
              gap="2"
            >
              <Flex gap="2">
                <Image src={liste} w="40px" />
                <Text alignSelf="center" align="center" fontSize="2xl">
                  {activity.category}
                  Catégorie
                </Text>
              </Flex>
              <Flex gap="2">
                <Image src={histoire} w="40px" />
                <Text alignSelf="center" align="center" fontSize="2xl">
                  {activity.duration}
                  Durée
                </Text>
              </Flex>
              <Flex gap="2">
                <Image src={enfants} w="40px" />
                <Text alignSelf="center" align="center" fontSize="2xl">
                  {activity.ageGroup}
                  Tranche d'âge
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
              <Flex gap="5">
                <Image src={liste} w="50px" />
                <Text fontSize="3xl">{activity.category}</Text>
              </Flex>
              <Flex gap="5">
                <Image src={enfants} w="50px" />
                <Text fontSize="3xl">{activity.ageGroup}</Text>
              </Flex>
              <Flex gap="5">
                <Image src={histoire} w="50px" />
                <Text fontSize="3xl">{activity.duration}</Text>
              </Flex>
              <Flex gap="5">
                <Image src={niveau} w="50px" />
                <Text fontSize="3xl">{activity.ecologicalLevel}</Text>
              </Flex>
              <Flex gap="5">
                <Image src={createurDeContenu} w="50px" />
                <Text fontSize="3xl">
                  {/* {user.familyname} */}
                  Créateur
                </Text>
              </Flex>
            </Flex>

            <Flex h="40%">
              <Flex
                w="50%"
                m="1rem"
                p="2rem"
                border="1px"
                borderColor="#6E41E2"
                borderRadius="30px"
                boxShadow="dark-lg"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Heading>Matériels : </Heading>
                <Text alignSelf="center" fontSize="2xl">
                  {activity.requirements}
                </Text>
              </Flex>
              <Flex
                w="50%"
                m="1rem"
                p="2rem"
                border="1px"
                borderColor="#6E41E2"
                borderRadius="30px"
                boxShadow="dark-lg"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Heading>Détails : </Heading>
                <Text alignSelf="center" fontSize="2xl">
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
