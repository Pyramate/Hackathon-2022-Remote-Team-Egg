import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import Background from '../assets/background.png';
import '../styles/index.css';
import WelcomeCard from '../components/WelcomeCard';
import DailyChallenge from '../components/DailyChallenge';
import Header from '../components/Header';

export default function Home() {
  return (
    <Box bgImage={Background} bgRepeat="no-repeat" bgSize="cover" h="100vh">
      <Header />
      <Flex direction="column" w="90%" m="auto">
        <Flex direction="row" justifyContent="space-between">
          <WelcomeCard />
          <DailyChallenge />
        </Flex>
        <Flex direction="column">
          <Heading color="#111111" fontSize="4xl" fontWeight="800">
            Les dernières activités proposées
          </Heading>
        </Flex>
        <Flex direction="column">
          <Heading color="#111111" fontSize="4xl" fontWeight="800">
            Evénements autour de chez toi
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
}
