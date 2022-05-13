import React from 'react';
import { Flex, Box, Heading, Link, Button } from '@chakra-ui/react';
import Background from '../assets/background.png';
import '../styles/index.css';
import WelcomeCard from '../components/WelcomeCard';
import { getUser } from '../services/userService';
import DailyChallenge from '../components/DailyChallenge';
import CarouselGlobalActivitiesHome from '../components/CarouselGlobalActivitiesHome';
import CarouselGlobalEventsHome from '../components/CarouselGlobalEventsHome';
import Header from '../components/Header';

export default function Home() {
  return (
    <Box bgImage={Background} bgRepeat="no-repeat" bgSize="cover" minH="100vh">
      <Header />
      <Flex direction="column" w="90%" m="auto">
        <Flex direction="row" justifyContent="space-between">
          <WelcomeCard users={getUser()} />
          <DailyChallenge />
        </Flex>
        <Flex direction="column">
          <Heading color="#111111" fontSize="4xl" fontWeight="800">
            Les dernières activités proposées
          </Heading>
          <CarouselGlobalActivitiesHome limit={3} />
        </Flex>
        <Flex direction="column">
          <Flex justifyContent="space-between">
            <Heading color="#111111" fontSize="4xl" fontWeight="800">
              Evénements autour de chez toi
            </Heading>
            <Link href="/activites" alignSelf="center">
              <Button
                color="white"
                size="lg"
                variant="solid"
                colorScheme="purple"
              >
                Voir plus
              </Button>
            </Link>
          </Flex>
          <CarouselGlobalEventsHome />
        </Flex>
      </Flex>
    </Box>
  );
}
