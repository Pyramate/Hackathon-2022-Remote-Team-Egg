import {
  Input,
  Stack,
  Button,
  Flex,
  Container,
  SimpleGrid,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import Home from "./Home.jsx";
import fond from "../assets/fondinscription.png";
import { useState } from "react";

export default function Inscription() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [city, setCity] = useState("");
  const [ecolevel, setEcololevel] = useState("");
  const [age, setAge] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleMail(e) {
    setMail(e.target.value);
  }
  function handleCity(e) {
    setCity(e.target.value);
  }
  function handleLevel(e) {
    setEcololevel(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }
  function input() {
    <Input
      placeholder="nom de l'enfant"
      bg={"gray.100"}
      border={0}
      color={"gray.500"}
      _placeholder={{
        color: "gray.500",
      }}
    />;
  }

  function handleClick(e) {
    input(e.target.value);
  }

  return (
    <>
      <Box bgImage={fond} bgRepeat="no-repeat" bgSize="cover">
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 5 }}
          py={{ base: 10, sm: 20, lg: 32 }}
          z-index="10"
          h="100vh"
        >
          <Stack spacing={{ base: 10, md: 20 }}></Stack>
          <Stack
            bg={"none"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 5 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "2xl" }}
          >
            <Stack spacing={4}>
              <Heading
                color={"green.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
              >
                Il n’est jamais trop tôt pour faire de grandes choses{" "}
              </Heading>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "xl" }}>
                Rejoignez la communauté des familles engagées
              </Text>
            </Stack>
            <Box as={"form"} mt={10}>
              <Stack spacing={4}>
                <Flex direction="row" justify="20px">
                  <Input
                    placeholder="Nom de ta Tribu"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    mr="1rem"
                    onChange={handleName}
                  />
                  <Input
                    placeholder="name@email.com"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    onChange={handleMail}
                  />
                </Flex>
                <Flex>
                  <Input
                    placeholder="Ville"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    onChange={handleCity}
                    mr="1rem"
                  />{" "}
                  <Input
                    placeholder="Niveau écolo"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    onChange={handleLevel}
                    mr="1rem"
                  />{" "}
                  <Input
                    placeholder="Age de tes enfants ?"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    onChange={handleAge}
                  />{" "}
                </Flex>
              </Stack>

              <Button
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, purple.400,purple.200)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, purple.200,purple.400)",
                  boxShadow: "xl",
                }}
                onClick={<Home />}
              >
                Enregistrer
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
