import { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex } from '@chakra-ui/react';

import CardActivity from './CardActivity';

export default function CarouselGlobalActivitiesPages({ genre = null }) {
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
    <Flex justifyContent="space-around" flexWrap="wrap">
      <Flex justifyContent="space-around" flexWrap="wrap" w="80%">
        {genre
          ? activities
              .filter((activity) => activity.category === genre)
              .map((activity) => (
                <CardActivity activity={activity} key={activity.id} />
              ))
          : activities.map((activity) => (
              <CardActivity activity={activity} key={activity.id} />
            ))}
      </Flex>
    </Flex>
  );
}
