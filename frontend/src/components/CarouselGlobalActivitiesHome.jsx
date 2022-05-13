import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Flex, Link } from '@chakra-ui/react';

import CardActivity from './CardActivity';

export default function CarouselGlobalActivitiesHome({
  limit = null,
  isOnHome = false,
}) {
  const [activities, setActivities] = useState([]);

  const getActivity = () => {
    axios
      .get('http://localhost:4000/api/activities')
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
    <Flex
      direction={isOnHome ? 'row' : 'column'}
      justifyContent="space-between"
      flexWrap="no-wrap"
      overflow="auto"
      gap={6}
    >
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
  );
}
