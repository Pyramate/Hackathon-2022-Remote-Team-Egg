import { Box, Container, Grid, GridItem, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function EvenementsGlobales() {
  const [map, setMap] = useState("");

  axios
    .get("http://api.positionstack.com/v1/4705068defc72a9e86a8ee87daa7c416")
    .then((res) => console.log(res.data));
  return (
    <>
      <Container>
        {" "}
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Grid templateColumns="repeat(1, 1fr)" gap={6}>
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
          </Grid>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            accusamus, vel delectus officiis labore est itaque repudiandae
            excepturi nobis perspiciatis laboriosam placeat a ducimus. Sint odit
            hic qui minus sed.
          </p>
        </Grid>
        <Box></Box>
      </Container>{" "}
    </>
  );
}
