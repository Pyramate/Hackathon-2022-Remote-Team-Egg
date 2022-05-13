import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Flex, Link } from "@chakra-ui/react";

import CardActivity from "./CardActivity";

export default function CarouselGlobalActivities() {
  const [activity, setActivity] = useState([]);

  const getActivity = () => {
    axios
      .get("https://localhost4000/api/users")
      .then((res) => setActivity(activity.concat(res.activity)));
  };
  useEffect(() => {
    getActivity();
  }, []);

  return (
    <Flex justifyContent="space-around" flexWrap="wrap">
      <Flex justifyContent="space-around" flexWrap="wrap" w="80%">
        <CardActivity />
        <CardActivity />
        <CardActivity />
        {activity.map((activity) => (
          <CardActivity activity={activity} key={activity.id} />
        ))}
      </Flex>
      <Link fontStyle="italic" href="/activites" alignSelf="center">
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
