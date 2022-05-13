import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Flex, Link } from '@chakra-ui/react';

import CardEventLarge from './CardEventLarge';

export default function CarouselGlobalEventsLarge({
  limit = null,
  isOnHome = false,
}) {
  const [events, setEvents] = useState([]);

  const getEvent = () => {
    axios
      .get('http://localhost:4000/api/events')
      .then((res) => res.data)
      .then((data) => {
        setEvents(data);
        console.log(events);
      });
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      flexWrap="no-wrap"
      w="90%"
      maxW="900px"
      overflow="auto"
    >
      {limit
        ? events
            .slice(0, limit)
            .map((event) => <CardEventLarge anEvent={event} key={event.id} />)
        : events.map((event) => (
            <CardEventLarge anEvent={event} key={event.id} />
          ))}
    </Flex>
  );
}
