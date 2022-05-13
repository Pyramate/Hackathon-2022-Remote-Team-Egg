import { React, useEffect } from 'react';
import axios from 'axios';
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


export default function WelcomeCard({ users }) {
  const color = useColorModeValue('green.700');

  const getUser = () => {
    axios
      .get(`http://localhost:4000/api/users/${users.id}`, {})
      .then((response) => response.data)
      .then((data) => console.log(data.familyname));
  };
  useEffect(() => {
    getUser();
  }, []);

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
            <Flex>
            <Text
              fontSize={'l'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}
            >
              {' '}
              Niveau écolo de la tribu : 
            </Text>
            <Text color={color}>{users.ecologicalLevel}</Text>
            </Flex>
            <Flex alignItems={'center'}>
              <Text px={3}>Bientôt le prochain niveau! </Text>
              <Flex flexDirection="row">
                <CircularProgress value={0} color="green.400">
                  <CircularProgressLabel>0%</CircularProgressLabel>
                </CircularProgress>
              </Flex>
            </Flex>
          </Stack>
          <Flex flex={1}>
            <Image objectFit="cover" boxSize="100%" src="https://avatars.dicebear.com/api/avataaars/:seed.svg" />
          </Flex>
        </Stack>
      </Center>
    </div>
  );
}
