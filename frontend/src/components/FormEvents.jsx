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
  import fond from "../assets/background.png";
  import { useState } from "react";
  import axios from "axios";
  
  function FormEvents() {
    const [name, setName] = useState("");
    const [ageGroup, setAgeGroup] = useState("");
    const [ecologicalLevel, setEcologicalLevel] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [requirement, setRequirement] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [eventLocation, setEventLocation] = useState("");
  
    function handleName(e) {
      setName(e.target.value);
    }
    function handleLevel(e) {
      setEcologicalLevel(e.target.value);
    }
    function handleAge(e) {
      setAgeGroup(e.target.value);
    }
    function handleStartDate(e) {
      setStartDate(e.target.value);
    }

    function handleEndDate(e) {
        setEndDate(e.target.value);
    }

    function handleEventLocation(e) {
        setEventLocation(e.target.value);
    }

    function handleCategory(e) {
      setCategory(e.target.value);
    }
    function handleDescription(e) {
      setDescription(e.target.value);
    }
    function handleRequirement(e) {
      setRequirement(e.target.value);
    }
  
    const postEvent = (e) => {
      e.preventDefault();
      axios.post("http://localhost:4000/api/events", {
        name: name,
        startDate: startDate,
        endDate: endDate,
        category: category,
        eventLocation: eventLocation,
        ageGroup: ageGroup,
        ecologicalLevel: ecologicalLevel,
        description: description,
        requirement: requirement
      });
    };
  
    return (
      <>
        <FormControl isRequired onSubmit={postEvent}>
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
                    Partage tes supers idées d'activité avec le reste de la communauté.{" "}
                  </Heading>
                  <Text color={"gray.500"} fontSize={{ base: "sm", sm: "xl" }}>
                    N'oublie pas d'indiquer toutes les informations nécessaires !{" "}
                  </Text>
                </Stack>
                <Box as={"form"} mt={10}>
                  <Stack spacing={4}>
                    <Flex direction="row" justify="20px">
                      <Input
                        placeholder="Nom de l'activité"
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
                        placeholder="Date de début"
                        bg={"gray.100"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                        onChange={handleStartDate}
                      />
                      <Input
                        placeholder="Date de fin"
                        bg={"gray.100"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                        onChange={handleEndDate}
                      />
                    </Flex>
                    <Flex>
                    <Input
                        placeholder="Lieu de l'évenement"
                        bg={"gray.100"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                        onChange={handleEventLocation}
                        mr="1rem"
                      />{" "}
                      <Input
                        placeholder="Category"
                        bg={"gray.100"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                        onChange={handleCategory}
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
                        <option value="0-3">0-3</option>
                        <option value="4-7">4-7</option>
                        <option value="8-11">8-11</option>
                        <option value="12 et +">12 et +</option>
                      </Select>
                    </Flex>
                    <Flex direction="row" justify="20px">
                      <Input
                        placeholder="Description"
                        bg={"gray.100"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                        mr="1rem"
                        onChange={handleDescription}
                      />
                      <Input
                        placeholder="Matériel requis"
                        bg={"gray.100"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                        onChange={handleRequirement}
                      />
                    </Flex>
                  </Stack>
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
                </Box>
              </Stack>
            </Container>
          </Box>
        </FormControl>
      </>
    );
  }
  
  export default FormEvents;