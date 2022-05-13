import React from 'react';
import {
  CircularProgress,
  CircularProgressLabel,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Image,
} from '@chakra-ui/react';

import dailyChallenge from '../assets/dailychallenge.png';

export default function WelcomeCard({ users }) {
  const color = useColorModeValue('green.700');

  return (
    <div>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={2}
        >
          <Stack flex={1} flexDirection="column" justifyContent="space-around">
            <Heading
              fontSize={'3xl'}
              fontFamily={'body'}
              color={color}
              pl={2}
              px={3}
            >
              {`Hello la tribu ${users.familyname} !`}
            </Heading>

            <Text
              fontSize={'xl'}
              fontFamily="Heebo"
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}
            >
              Passez une saine journée.
            </Text>
            <Text
              fontSize={'l'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}
            >
              {' '}
              Niveau écolo de la tribu :{users.ecologicalLevel}
            </Text>
            <Flex alignItems={'center'}>
              <Text px={3}>Bientôt le prochain niveau! </Text>
              <Flex flexDirection="row">
                <CircularProgress value={40} color="green.400">
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
              </Flex>
            </Flex>
          </Stack>
          <Flex flex={1}>
            <Image objectFit="cover" boxSize="100%" src={dailyChallenge} />
          </Flex>
        </Stack>
      </Center>
    </div>
  );
}
