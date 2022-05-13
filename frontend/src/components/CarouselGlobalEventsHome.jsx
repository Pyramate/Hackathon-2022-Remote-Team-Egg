import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Flex, Link } from '@chakra-ui/react';

import CardEvent from './CardEvent.jsx';

export default function CarouselGlobalEventsHome({ limit = null }) {
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
    <>
      <Flex justifyContent="space-between" flexWrap="no-wrap">
        {limit
          ? events
              .slice(0, limit)
              .map((event) => <CardEvent anEvent={event} key={event.id} />)
          : events.map((event) => <CardEvent anEvent={event} key={event.id} />)}
      </Flex>
    </>
  );
}
