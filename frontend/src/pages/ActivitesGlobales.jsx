import logoactivite from '../assets/bglogo.png';
import { Box, Container, Text, Flex } from '@chakra-ui/react';
import CarouselGlobalActivitiesPages from '../components/CarouselGlobalActivitiesPages';
import Header from '../components/Header';

import background from '../assets/background.png';

export default function ActivitesGlobales() {
  return (
    <>
      <Header />
      <Box bgImage={background} bgRepeat="no-repeat" bgSize="cover">
        <Container
          bgImage={logoactivite}
          bgRepeat="repeat"
          bgSize="cover"
          bgPosition="center"
          h="60vh"
          maxW="100vw"
        ></Container>
        <Flex mt="3rem" flexDirection="column">
          <Text color={'green.500'} fontSize={{ base: 'sm', sm: '2xl' }}>
            Recettes{' '}
          </Text>
          <CarouselGlobalActivitiesPages genre={'Recette'} />
        </Flex>
        <Flex mt="3rem" flexDirection="column">
          <Text color={'green.500'} fontSize={{ base: 'sm', sm: '2xl' }}>
            Cosmétiques{' '}
          </Text>
          <CarouselGlobalActivitiesPages genre={'Hygiène'} />
        </Flex>
        <Flex mt="3rem" flexDirection="column">
          <Text color={'green.500'} fontSize={{ base: 'sm', sm: '2xl' }}>
            Produits Entretiens{' '}
          </Text>
          <CarouselGlobalActivitiesPages genre={'Entretien'} />
        </Flex>
        <Flex mt="3rem" flexDirection="column">
          <Text color={'green.500'} fontSize={{ base: 'sm', sm: '2xl' }}>
            Jardin{' '}
          </Text>
          <CarouselGlobalActivitiesPages genre={'Jardin'} />
        </Flex>
      </Box>
    </>
  );
}
