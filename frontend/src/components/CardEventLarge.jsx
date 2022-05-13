import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Badge,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import moment from 'moment';

export default function CardEventLarge({ anEvent }) {
  return (
    <Flex
      py={3}
      gap={5}
      direction="row"
      justify="space-between"
      borderRadius="md"
    >
      <Box
        display="flex"
        w="100%"
        borderRadius="md"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        p={2}
        gap={6}
        overflow={'hidden'}
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box
          w="100%"
          maxW="200px"
          h="100%"
          borderRadius="md"
          bg={'gray.100'}
          bgImage={anEvent.pictureActivity}
          bgPosition="center"
        ></Box>
        <Flex direction="column">
          <Stack w="300px">
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              Evénement
            </Text>
            <Heading color="gray.700" fontSize={'xl'} fontFamily={'Heebo'}>
              {anEvent.name}
            </Heading>
            <Text color={'gray.500'} noOfLines={2}>
              {anEvent.description}
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Avatar src={anEvent.userId} alt={'Author'} />
            <Stack direction={'column'} spacing={0} fontSize={'lg'}>
              <Stack direction={'row'} spacing={2} fontSize={'lg'}>
                <Badge colorScheme="orange" w="fit-content" size="md">
                  {anEvent.category}
                </Badge>
                <Badge colorScheme="green" w="fit-content" size="md">
                  {anEvent.eventLocation}
                </Badge>
                <Badge colorScheme="purple" w="fit-content" size="md">
                  {anEvent.ageGroup}
                </Badge>
                <Badge colorScheme="yellow" w="fit-content" size="md">
                  {anEvent.ecologicalLevel}
                </Badge>
              </Stack>
              <Text color={'gray.500'}>{`Du ${moment(anEvent.startDate).format(
                'DD MMMM'
              )} au ${moment(anEvent.endDate).format('DD MMMM')}`}</Text>
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
}
