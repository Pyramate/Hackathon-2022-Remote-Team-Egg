import {
    Input,
    Stack,
    Button,
    Flex,
    Container,
    Box,
    FormControl,
    Heading,
    Image
  } from "@chakra-ui/react";
  import fond from "../assets/background.png";
  import { useState } from "react";
  import axios from "axios";
  import activity from "../assets/activity.png";
  
  function FormChallenge() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [pointsScored, setPointsScored] = useState("");
  
    function handleName(e) {
      setName(e.target.value);
    }
    function handleDescription(e) {
      setDescription(e.target.value);
    }
    function handlePointsScored(e) {
      setPointsScored(e.target.value);
    }
  
    const postEvent = (e) => {
      e.preventDefault();
      axios.post("http://localhost:4000/api/events", {
        name: name,
        description: description,
        pointsScored: pointsScored,
      });
    };
  
    return (
      <>
        <FormControl isRequired onSubmit={postEvent}>
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
                    Défie la communauté à appliquer un petit geste tous les jours.{" "}
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
                          placeholder="Nom du challenge"
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
                          placeholder="Points gagnés"
                          bg={"gray.100"}
                          border={0}
                          color={"gray.500"}
                          _placeholder={{
                            color: "gray.500",
                          }}
                          onChange={handlePointsScored}
                        />
                      </Stack>
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
  
  export default FormChallenge;
  