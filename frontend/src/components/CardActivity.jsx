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
  Badge,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaRegClock, FaAward, FaChild, FaClipboardList } from 'react-icons/fa';

function CardActivity({ activity }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex py={6}>
        <Box
          w="full"
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}
            bgImage={activity.pictureActivity}
          ></Box>
          <Stack maxW="400px">
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              ACTIVITÉ
            </Text>
            <Heading color="gray.700" fontSize={'xl'} fontFamily={'Heebo'}>
              {activity.name}
            </Heading>
            <Text color={'gray.500'} noOfLines={2}>
              {activity.description}
            </Text>
          </Stack>
          <Stack
            mt={6}
            direction={'row'}
            spacing={4}
            align={'center'}
            justify={'space between'}
            width="100%"
          >
            <Avatar src={activity.userId} alt={'Author'} />
            <Stack direction={'column'} spacing={0} fontSize={'lg'}>
              <Stack direction={'row'} spacing={2} fontSize={'lg'}>
                <FaClipboardList color="#6E41E2" size="20px" />
                <Badge colorScheme="orange" w="fit-content" size="md">
                  {activity.category}
                </Badge>
                <FaRegClock color="#6E41E2" size="20px" />

                <Badge colorScheme="orange" w="fit-content" size="md">
                  {activity.duration}
                </Badge>
                <FaChild color="#6E41E2" size="20px" />

                <Badge colorScheme="purple" w="fit-content" size="md">
                  {activity.ageGroup}
                </Badge>
              </Stack>
            </Stack>
            <Button
              fontFamily={'body'}
              borderRadius="lg"
              onClick={onOpen}
              colorScheme="purple"
              alignSelf="center"
              fontSize={'md'}
            >
              Voir plus
            </Button>
          </Stack>
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
                  fontSize={'6xl'}
                  fontFamily={'body'}
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
                <Text fontSize={'4xl'} fontFamily={'body'}>
                  {activity.category}
                </Text>
              </Flex>
              <Flex gap="5" placeItems="center">
                <FaChild color="#6E41E2" size="60px" />
                <Text fontSize={'4xl'} fontFamily={'body'}>
                  {activity.ageGroup}
                </Text>
              </Flex>
              <Flex gap="5" placeItems="center">
                <FaRegClock color="#6E41E2" size="60px" />
                <Text fontSize={'4xl'} fontFamily={'body'}>
                  {activity.duration}
                </Text>
              </Flex>
              <Flex gap="5" placeItems="center">
                <FaAward color="#6E41E2" size="60px" />
                <Text fontSize={'4xl'} fontFamily={'body'}>
                  {activity.ecologicalLevel}
                </Text>
              </Flex>
            </Flex>

            <Flex
              h="40%"
              flexDirection={{ base: 'column', xl: 'row' }}
              alignItems={{ base: 'center', xl: 'initial' }}
            >
              <Flex
                w={{ base: '90%', xl: '100%' }}
                m="1rem"
                p="2rem"
                borderRadius="lg"
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
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
                w={{ base: '90%', xl: '100%' }}
                m="1rem"
                p="2rem"
                borderRadius="lg"
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
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
    </>
  );
}

export default CardActivity;
