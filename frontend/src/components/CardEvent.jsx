import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
  Badge,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import moment from 'moment';

export default function CardEvent({ anEvent }) {
  return (
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
          bgImage={anEvent.pictureActivity}
        ></Box>
        <Stack>
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
      </Box>
    </Flex>
  );
}
