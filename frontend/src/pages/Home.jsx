import React from "react";
import { Flex } from "@chakra-ui/react";
import WelcomeCard from "../components/WelcomeCard";
import DailyChallenge from "../components/DailyChallenge";
import CarouselGlobalActivitiesHome from "../components/CarouselGlobalActivitiesHome";

export default function Home() {
  return (
    <div>
      <Flex direction="row" justifyContent="space-evenly">
        <WelcomeCard />
        <DailyChallenge />
      </Flex>
      <CarouselGlobalActivitiesHome limit={3} />
    </div>
  );
}
