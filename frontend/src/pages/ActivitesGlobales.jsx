import logoactivite from "../assets/bglogo.png";
import { Box, Container, Text } from "@chakra-ui/react";
export default function ActivitesGlobales() {
  return (
    <>
      <div>Navbar </div>
      <Box>
        <Container
          bgImage={logoactivite}
          bgRepeat="no-repeat"
          bgSize="cover"
          h="40vh"
          maxW="100vw"
        ></Container>
        <Text
          color={"green.500"}
          fontSize={{ base: "sm", sm: "2xl" }}
          mt="3rem"
          ml="10rem"
        >
          Recettes{" "}
        </Text>
        <Box>{/*{CardActivity.map((card) => )}*/}</Box>
        <Text
          color={"green.500"}
          fontSize={{ base: "sm", sm: "2xl" }}
          mt="3rem"
          ml="10rem"
        >
          Cosmetiques{" "}
        </Text>
        <Box>{/*{CardActivity.map((card) => )}*/}</Box>
        <Text
          color={"green.500"}
          fontSize={{ base: "sm", sm: "2xl" }}
          mt="3rem"
          ml="10rem"
        >
          Produits Entretiens{" "}
        </Text>
        <Box>{/*{CardActivity.map((card) => )}*/}</Box>
        <Text
          color={"green.500"}
          fontSize={{ base: "sm", sm: "2xl" }}
          mt="3rem"
          ml="10rem"
        >
          Jardins{" "}
        </Text>
        <Box>{/*{CardActivity.map((card) => )}*/}</Box>
      </Box>
    </>
  );
}
