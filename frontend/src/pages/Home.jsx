import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Background from '../assets/background.png';
import '../styles/index.css';
import WelcomeCard from '../components/WelcomeCard';
import DailyChallenge from '../components/DailyChallenge';
import Header from '../components/Header';

export default function Home() {
  return (
    <Box bgImage={Background} bgRepeat="no-repeat" bgSize="cover" h="100vh">
      <Header />
      <Flex direction="row" justifyContent="space-evenly">
        <WelcomeCard />
        <DailyChallenge />
      </Flex>
    </Box>
  );
}
