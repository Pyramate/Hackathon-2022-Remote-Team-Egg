import { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Logo from "../assets/ecolokids.png";

import FormActivity from "./FormActivity";
import FormEvents from "./FormEvents";
import FormChallenge from "./FormChallenge";

const Links = ["Activités", "Evénements", "Dashboard"];
const Linkto = ["/activites", "/events", "/dashboard"];

const NavLink = ({ children }) => (
  <Link
    px={3}
    py={1}
    size="lg"
    fontWeight="medium"
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("#6E41E2", "white"),
      color: "white",
      fontWeight: "700",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Header() {
  // const OverlayActivity = () => (
  //   <ModalOverlay
  //     bg="blackAlpha.300"
  //     backdropFilter="blur(10px) hue-rotate(90deg)"
  //   />
  // );

  // const OverlayEvent = () => (
  //   <ModalOverlay
  //     bg="blackAlpha.300"
  //     backdropFilter="blur(10px) hue-rotate(90deg)"
  //   />
  // );

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  // const {
  //   isOpen: { isOpenActivity },
  //   onOpen: { onOpenActivity },
  //   onClose: { onCloseActivity },
  // } = useDisclosure();
  // const {
  //   isOpen: { isOpenEvent },
  //   onOpen: { onOpenEvent },
  //   onClose: { onCloseEvent },
  // } = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [initiative, setInitiative] = useState("");

  const handleInitiativeClick = (e) => {
    debugger;
    setInitiative(e.target.value);
    onOpen();
  };

  const choices = ["Activity", "Events", "Challenge"];

  // const [overlayActivity, setOverlayActivity] = useState(<OverlayActivity />);
  // const [overlayEvent, setOverlayEvent] = useState(<OverlayEvent />);
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.900")} px={4}>
        <Flex h={24} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"lg"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={12} alignItems={"center"}>
            <Box w="30%">
              <Image src={Logo} alt="Ecolokids_logo" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={3}
                py={1}
                size="lg"
                fontWeight="600"
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("#6E41E2", "white"),
                  color: "white",
                  fontWeight: "600",
                }}
                href={"/activites"}
              >
                Activités
              </Link>
              <Link
                px={3}
                py={1}
                size="lg"
                fontWeight="600"
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("#6E41E2", "white"),
                  color: "white",
                  fontWeight: "600",
                }}
                href={"/evenements"}
              >
                Evénements à venir
              </Link>
              <Link
                px={5}
                py={1}
                size="lg"
                fontWeight="600"
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("#6E41E2", "white"),
                  color: "white",
                  fontWeight: "600",
                }}
                href={"/dashboard"}
              >
                L'espace de ma Tribu
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"} justifyContent="space-around" minW="25%">
            <Menu>
              <MenuButton
                variant={"solid"}
                color="white"
                bg={"#6E41E2"}
                size={"lg"}
                as={Button}
                leftIcon={<AddIcon />}
                _hover={{ bg: "#9b76f8" }}
              >
                Part initiative
              </MenuButton>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  minW={0}
                >
                  <Avatar
                    size={"md"}
                    src="https://avatars.dicebear.com/api/avataaars/:seed.svg"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Account</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuDivider />
                  <MenuItem>Log Out</MenuItem>
                </MenuList>
              </Menu>
              <MenuList>
                {choices.map((choice) => (
                  <MenuItem>
                    <Button
                      onClick={() => {
                        handleInitiativeClick();
                      }}
                    >
                      {`Open ${choice} Modal`}
                    </Button>
                    <Modal
                      isCentered
                      isOpen={isOpen}
                      onClose={onClose}
                      size="4xl"
                    >
                      {overlay}
                      <ModalContent>
                        <ModalBody textAlign="center">
                          {choice === "Activity" && <FormActivity />}
                          {choice === "Events" && <FormEvents />}
                          {choice === "Challenge" && <FormChallenge />}

                          <Button
                            justifySelf="center"
                            onClick={onClose}
                            fontFamily={"heading"}
                            mt={2}
                            type="submit"
                            w={"50%"}
                            bgGradient="linear(to-r, purple.400,purple.200)"
                            color={"white"}
                            _hover={{
                              bgGradient: "linear(to-r, purple.200,purple.400)",
                              boxShadow: "xl",
                            }}
                          >
                            Enregistrer
                          </Button>
                        </ModalBody>
                      </ModalContent>
                    </Modal>
                  </MenuItem>
                ))}
                {/* <MenuItem>
                  <Button
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      onOpen();
                    }}
                  >
                    Propose ton activité
                  </Button>
                  <Modal
                    isCentered
                    isOpen={isOpen}
                    onClose={onClose}
                    size="4xl"
                  >
                    {overlay}
                    {console.log(<OverlayOne />)}
                    <ModalContent>
                      <ModalBody textAlign="center">
                        <FormActivity />
                        <Button
                          justifySelf="center"
                          onClick={onClose}
                          fontFamily={"heading"}
                          mt={2}
                          type="submit"
                          w={"50%"}
                          bgGradient="linear(to-r, purple.400,purple.200)"
                          color={"white"}
                          _hover={{
                            bgGradient: "linear(to-r, purple.200,purple.400)",
                            boxShadow: "xl",
                          }}
                        >
                          Enregistrer
                        </Button>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </MenuItem> */}
                {/* <MenuItem>
                  {" "}
                  <Button
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      onOpenEvent();
                    }}
                  >
                    Propose ton évènement
                  </Button>
                  <Modal
                    isCentered
                    isOpen={isOpenEvent}
                    onClose={onCloseEvent}
                    size="4xl"
                  >
                    {overlay}
                    <ModalContent>
                      <ModalBody textAlign="center">
                        <FormEvents />
                        <Button
                          justifySelf="center"
                          onClick={onCloseEvent}
                          fontFamily={"heading"}
                          mt={2}
                          type="submit"
                          w={"50%"}
                          bgGradient="linear(to-r, purple.400,purple.200)"
                          color={"white"}
                          _hover={{
                            bgGradient: "linear(to-r, purple.200,purple.400)",
                            boxShadow: "xl",
                          }}
                        >
                          Enregistrer
                        </Button>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </MenuItem> */}
                {/* <MenuItem>
                  {" "}
                  <Button
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      onOpen();
                    }}
                  >
                    Propose ton challenge
                  </Button>
                  <Modal
                    isCentered
                    isOpen={isOpen}
                    onClose={onClose}
                    size="4xl"
                  >
                    {overlay}
                    <ModalContent>
                      <ModalBody textAlign="center">
                        <FormChallenge />
                        <Button
                          justifySelf="center"
                          onClick={onClose}
                          fontFamily={"heading"}
                          mt={2}
                          type="submit"
                          w={"50%"}
                          bgGradient="linear(to-r, purple.400,purple.200)"
                          color={"white"}
                          _hover={{
                            bgGradient: "linear(to-r, purple.200,purple.400)",
                            boxShadow: "xl",
                          }}
                        >
                          Enregistrer
                        </Button>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </MenuItem> */}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
