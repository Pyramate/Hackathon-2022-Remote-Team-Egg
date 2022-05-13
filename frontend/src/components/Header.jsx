import { useState } from 'react';
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import Logo from '../assets/ecolokids.png';

import FormActivity from './FormActivity';
import FormEvents from './FormEvents';
import FormChallenge from './FormChallenge';

const Links = ['Activités', 'Evénements', 'Dashboard'];
const Linkto = ['/activites', '/events', '/dashboard'];

const NavLink = ({ children }) => (
  <Link
    px={3}
    py={1}
    size="lg"
    fontWeight="medium"
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('#6E41E2', 'white'),
      color: 'white',
      fontWeight: '700',
    }}
    href={'#'}
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

  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const modal3 = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')} px={4}>
        <Flex h={24} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={12} alignItems={'center'}>
            <Box w="30%">
              <Link href="/accueil">
                <Image src={Logo} alt="Ecolokids_logo" />
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link
                px={3}
                py={1}
                size="lg"
                fontWeight="600"
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('#6E41E2', 'white'),
                  color: 'white',
                  fontWeight: '600',
                }}
                href={'/activites'}
              >
                Activités
              </Link>
              <Link
                px={3}
                py={1}
                size="lg"
                fontWeight="600"
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('#6E41E2', 'white'),
                  color: 'white',
                  fontWeight: '600',
                }}
                href={'/evenements'}
              >
                Evénements à venir
              </Link>
              <Link
                px={5}
                py={1}
                size="lg"
                fontWeight="600"
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('#6E41E2', 'white'),
                  color: 'white',
                  fontWeight: '600',
                }}
                href={'/dashboard'}
              >
                L'espace de ma Tribu
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'} justifyContent="space-around" minW="25%">
            <Menu>
              <MenuButton
                variant={'solid'}
                color="white"
                bg={'#6E41E2'}
                size={'lg'}
                as={Button}
                leftIcon={<AddIcon />}
                _hover={{ bg: '#9b76f8' }}
              >
                Partage ton initiative
              </MenuButton>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  minW={0}
                >
                  <Avatar
                    size={'md'}
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
                  <Button
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      modal1.onOpen();
                    }}
                  >
                    Propose ton activité
                  </Button>
                  <Modal
                    isCentered
                    isOpen={modal1.isOpen}
                    onClose={modal1.onClose}
                    size="4xl"
                  >
                    {overlay}
                    <ModalContent>
                      <ModalBody textAlign="center">
                        <FormActivity />
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </MenuItem>
                <MenuItem>
                  {' '}
                  <Button
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      modal2.onOpen();
                    }}
                  >
                    Propose ton évènement
                  </Button>
                  <Modal
                    isCentered
                    isOpen={modal2.isOpen}
                    onClose={modal2.onClose}
                    size="4xl"
                  >
                    {overlay}
                    <ModalContent>
                      <ModalBody textAlign="center">
                        <FormEvents />
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </MenuItem>
                <MenuItem>
                  {' '}
                  <Button
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      modal3.onOpen();
                    }}
                  >
                    Propose ton challenge
                  </Button>
                  <Modal
                    isCentered
                    isOpen={modal3.isOpen}
                    onClose={modal3.onClose}
                    size="4xl"
                  >
                    {overlay}
                    <ModalContent>
                      <ModalBody textAlign="center">
                        <FormChallenge />
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
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
