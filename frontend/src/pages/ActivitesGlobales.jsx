import logoactivite from "../assets/bglogo.png";
import { Box, Container, Text } from "@chakra-ui/react";

export default function ActivitesGlobales() {
  return (
    <>
      <Box>
        <Container
          bgImage={logoactivite}
          bgRepeat="repeat"
          bgSize="cover"
          bgPosition="center"
          h="60vh"
          maxW="100vw"
        ></Container>
        <Container mt="3rem" ml="10rem">
          <Text color={"green.500"} fontSize={{ base: "sm", sm: "2xl" }}>
            Recettes{" "}
          </Text>
          <Box>{/*{CardActivity.map((card) => )}*/}</Box>
        </Container>
        <Container mt="3rem" ml="10rem">
          {" "}
          <Text color={"green.500"} fontSize={{ base: "sm", sm: "2xl" }}>
            Cosmetiques{" "}
          </Text>
          <Box>{/*{CardActivity.map((card) => )}*/}</Box>{" "}
        </Container>
        <Container mt="3rem" ml="10rem">
          <Text color={"green.500"} fontSize={{ base: "sm", sm: "2xl" }}>
            Produits Entretiens{" "}
          </Text>
          <Box>{/*{CardActivity.map((card) => )}*/}</Box>
        </Container>
        <Container mt="3rem" ml="10rem">
          <Text color={"green.500"} fontSize={{ base: "sm", sm: "2xl" }}>
            Jardins{" "}
          </Text>
          <Box>{/*{CardActivity.map((card) => )}*/}</Box>
        </Container>
      </Box>
    </>
  );
}
