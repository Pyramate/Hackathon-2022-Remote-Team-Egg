import {
  Input,
  Stack,
  Button,
  Flex,
  Container,
  Box,
  FormControl,
  Select,
  Heading,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import fond from "../assets/background.png";
import { useState } from "react";
import axios from "axios";
import activity from "../assets/activity.png";

function FormActivity() {
  const [name, setName] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [ecologicalLevel, setEcologicalLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [requirement, setRequirement] = useState("");

  const { onClose } = useDisclosure();

  function handleName(e) {
    setName(e.target.value);
  }
  function handleLevel(e) {
    setEcologicalLevel(e.target.value);
  }
  function handleAge(e) {
    setAgeGroup(e.target.value);
  }
  function handleDuration(e) {
    setDuration(e.target.value);
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

  const postActivity = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/activities", {
      name: name,
      duration: duration,
      category: category,
      ageGroup: ageGroup,
      ecologicalLevel: ecologicalLevel,
      description: description,
      requirement: requirement,
    });
  };

  return (
    <>
      <FormControl isRequired onSubmit={postActivity}>
        <Box bgImage={fond} bgRepeat="no-repeat" bgSize="cover">
          <Container py={{ base: 5, sm: 10, lg: 15 }} z-index="10" h="auto">
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
                  Partage tes activités préférées.{" "}
                </Heading>
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  h="300px"
                  src={activity}
                />
              </Stack>
              <Box as={"form"} mt={10}>
                <Stack spacing={4}>
                  <Flex direction="column" justify="20px">
                    <Stack spacing={4}>
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
                        placeholder="Durée"
                        bg={"gray.100"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                        onChange={handleDuration}
                      />
                    </Stack>
                  </Flex>
                  <Flex direction="column">
                    <Stack spacing={4}>
                      <Input
                        placeholder="Catégorie"
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
                    </Stack>
                  </Flex>
                  <Flex direction="column" justify="20px">
                    <Stack spacing={4}>
                      <Input
                        placeholder="Description"
                        bg={"gray.100"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                        mr="1rem"
                        h={200}
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
                        h={100}
                        onChange={handleRequirement}
                      />
                    </Stack>
                  </Flex>
                </Stack>
                {/* <Button
                  onClick={onClose}
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
                </Button> */}
              </Box>
            </Stack>
          </Container>
        </Box>
      </FormControl>
    </>
  );
}

export default FormActivity;
