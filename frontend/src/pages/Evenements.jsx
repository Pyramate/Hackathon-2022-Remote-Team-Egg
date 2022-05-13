import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import background from '../assets/background.png';
import Header from '../components/Header';
import CarouselGlobalEventsLarge from '../components/CarouselGlobalEventsLarge';
export default function EvenementsGlobales() {
  return (
    <>
      <Header />
      <Box
        bgImage={background}
        bgRepeat="no-repeat"
        bgSize="cover"
        minH="100vh"
      >
        <Tabs
          variant="soft-rounded"
          colorScheme="green"
          bg="white"
          align="center"
        >
          <TabList
            w="100%"
            py="20px"
            borderTop="1px solid #eee"
            borderBottom="1px solid #eee"
            gap={6}
          >
            <Tab>Tout</Tab>
            <Tab>Insolite</Tab>
            <Tab>Nourriture</Tab>
            <Tab>Sport</Tab>
          </TabList>
        </Tabs>
        <Flex h="80vh" gap={6} p={6}>
          <CarouselGlobalEventsLarge />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
            height="-webkit-fill-available"
            width="100%"
          ></iframe>
        </Flex>
      </Box>
    </>
  );
}
