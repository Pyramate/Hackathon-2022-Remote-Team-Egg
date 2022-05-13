import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "../styles/index.css";
import Background from "../assets/background.png";
import WelcomeCard from "../components/WelcomeCard";
import DailyChallenge from "../components/DailyChallenge";
import CarouselGlobalActivitiesHome from "../components/CarouselGlobalActivitiesHome";
import Header from "../components/Header";

export default function Home() {
  return (
    <Box bgImage={Background} bgRepeat="no-repeat" bgSize="cover" minH="100vh">
      <Header />
      <Flex direction="row" justifyContent="space-evenly">
        <WelcomeCard />
        <DailyChallenge />
      </Flex>
      <CarouselGlobalActivitiesHome limit={3} />
    </Box>
  );
}
