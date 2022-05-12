import {
  Input,
  Stack,
  Button,
  Flex,
  Container,
  SimpleGrid,
  Text,
  Box,
  FormControl,
  Select,
  Heading,
} from "@chakra-ui/react";
import Home from "./Home.jsx";
import fond from "../assets/fondinscription.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function FormInscription() {
  const [familyname, setFamilyname] = useState("");
  const [email, setEmail] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [ecologicalLevel, setEcologicalLevel] = useState("");
  const [city, setCity] = useState("");

  function handleName(e) {
    setFamilyname(e.target.value);
  }
  function handleMail(e) {
    setEmail(e.target.value);
  }
  function handleCity(e) {
    setCity(e.target.value);
  }
  function handleLevel(e) {
    setEcologicalLevel(e.target.value);
  }
  function handleAge(e) {
    setAgeGroup(e.target.value);
  }

  const postUser = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/users", {
      familyname: familyname,
      email: email,
      ageGroup: ageGroup,
      city: city,
      ecologicalLevel: ecologicalLevel,
    });
  };

  return (
    <>
      <FormControl isRequired onSubmit={postUser && <Home />}>
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
                  Découvre et partage les initiatives écologiques de ta ville.{" "}
                </Text>
                <Text color={"gray.500"} fontSize={{ base: "sm", sm: "xl" }}>
                  Fais grimper la conscience de ta famille en participant à un
                  maximum d'événements!{" "}
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
                      placeholder="mail@email.com"
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
                    <Select
                      name="Niveau Ecolo"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      onChange={handleLevel}
                      mr="1rem"
                    >
                      <option value="" disabled selected>
                        Niveau Ecolo
                      </option>{" "}
                      <option value="Beginner">Débutant</option>
                      <option value="Intermediate">Avancé</option>
                      <option value="Advanced">Confirmé</option>
                    </Select>
                    <Select
                      name="age"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      onChange={handleAge}
                    >
                      <option value="" disabled selected>
                        Age
                      </option>{" "}
                      <option value="option1">0-3</option>
                      <option value="option2">4-7</option>
                      <option value="option3">8-11</option>
                      <option value="option4">12 et +</option>
                    </Select>
                  </Flex>
                </Stack>
                <Link to="/accueil" element={<Home />}>
                  <Button
                    fontFamily={"heading"}
                    mt={8}
                    type="submit"
                    w={"full"}
                    bgGradient="linear(to-r, purple.400,purple.200)"
                    color={"white"}
                    _hover={{
                      bgGradient: "linear(to-r, purple.200,purple.400)",
                      boxShadow: "xl",
                    }}
                  >
                    Enregistrer
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Container>
        </Box>
      </FormControl>
    </>
  );
}
