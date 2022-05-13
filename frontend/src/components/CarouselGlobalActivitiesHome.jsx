import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Flex, Link } from "@chakra-ui/react";

import CardActivity from "./CardActivity";

export default function CarouselGlobalActivitiesHome({ limit = null }) {
  const [activities, setActivities] = useState([]);

  const getActivity = () => {
    axios
      .get("http://localhost:4000/api/activities")
      .then((res) => res.data)
      .then((data) => {
        setActivities(data);
        console.log(activities);
      });
  };

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <Flex justifyContent="space-around" flexWrap="wrap">
      <Flex justifyContent="space-around" flexWrap="wrap" minW="80%" gap="2">
        {limit
          ? activities
              .slice(0, limit)
              .map((activity) => (
                <CardActivity activity={activity} key={activity.id} />
              ))
          : activities.map((activity) => (
              <CardActivity activity={activity} key={activity.id} />
            ))}
      </Flex>
      <Link
        fontStyle="italic"
        href="/activites"
        alignSelf="center"
        w="20%"
        textAlign="center"
      >
        <Button
          color="white"
          fontSize="2xl"
          variant="solid"
          colorScheme="purple"
          h="50px"
        >
          Voir plus d'activités
        </Button>
      </Link>
    </Flex>
  );
}
