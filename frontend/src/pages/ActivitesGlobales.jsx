import logoactivite from '../assets/image_activites.jpeg';
import {
  Box,
  Text,
  Flex,
  VStack,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import CarouselGlobalActivitiesPages from '../components/CarouselGlobalActivitiesPages';
import CarouselGlobalActivitiesHome from '../components/CarouselGlobalActivitiesHome';
import Header from '../components/Header';

import background from '../assets/background.png';

export default function ActivitesGlobales() {
  return (
    <>
      <Header />
      <Box bgImage={background} bgRepeat="no-repeat" bgSize="cover">
        <Flex
          bgImage={logoactivite}
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
        >
          <VStack
            w={'full'}
            justify={'center'}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={'linear(to-r, blackAlpha.600, blackAlpha.400)'}
          >
            <Stack my="7rem" maxW={'2xl'} align={'flex-start'} spacing={25}>
              <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
              >
                Découvre les activités à faire avec ta tribu.
              </Text>
            </Stack>
          </VStack>
        </Flex>
        <Flex w="90vw" flexDirection="column">
          <Flex mt="3rem" flexDirection="column">
            <Text color={'green.500'} fontSize="4xl" fontWeight="600" ml="5rem">
              Recettes
            </Text>
            <CarouselGlobalActivitiesHome isOnHome={true} genre={'Recette'} />
          </Flex>
          <Flex mt="3rem" flexDirection="column">
            <Text color={'green.500'} fontSize="4xl" fontWeight="600" ml="5rem">
              Cosmétiques{' '}
            </Text>

            <CarouselGlobalActivitiesHome isOnHome={true} genre={'Hygiène'} />
          </Flex>
          <Flex mt="3rem" flexDirection="column">
            <Text color={'green.500'} fontSize="4xl" fontWeight="600" ml="5rem">
              Produits Entretiens{' '}
            </Text>
            <CarouselGlobalActivitiesHome isOnHome={true} genre={'Entretien'} />
          </Flex>
          <Flex mt="3rem" flexDirection="column" id="garden">
            <Text color={'green.500'} fontSize="4xl" fontWeight="600" ml="5rem">
              Jardin{' '}
            </Text>
            <CarouselGlobalActivitiesHome isOnHome={true} genre={'Jardin'} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
