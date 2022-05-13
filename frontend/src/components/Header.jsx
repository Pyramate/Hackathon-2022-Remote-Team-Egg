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
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Logo from "../assets/ecolokids.png";
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
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
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
                <MenuItem>
                  {" "}
                  <Button
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      onOpen();
                    }}
                  >
                    Propose ton activité
                  </Button>
                  <Modal isCentered isOpen={isOpen} onClose={onClose}>
                    {overlay}
                    <ModalContent>
                      <ModalHeader>Modal Title</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody></ModalBody>
                      <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
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
