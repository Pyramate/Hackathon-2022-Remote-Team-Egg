import React from "react";
import { Flex } from "@chakra-ui/react";
import WelcomeCard from "../components/WelcomeCard";
import DailyChallenge from "../components/DailyChallenge";
import CarouselGlobalActivities from "../components/CarouselGlobalActivities";

export default function Home() {
  return (
    <div>
      <Flex direction="row" justifyContent="space-evenly">
        <WelcomeCard />
        <DailyChallenge />
      </Flex>
      <CarouselGlobalActivities />
    </div>
  );
}
