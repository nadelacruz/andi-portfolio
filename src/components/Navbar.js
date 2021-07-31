import {
  Text,
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const NavLink = ({ children, link }) => (
  <Link as={RouterLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('#DDDCDD', 'gray.800'),
    }}
    to={link}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('#D2D2D3', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            backgroundColor='#D2D2D3'
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Text as="b"></Text></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <NavLink key={"Home"} link={"/"}>{"Home"}</NavLink>
              <NavLink key={"Illustrations"} link={"/Illustrations"}>{"Illustrations"}</NavLink>
              <NavLink key={"Commision Me"} link={"#44"}>{"Commision"}</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://i.ibb.co/ct4sbJ3/Genshin-Impact-Dreamlike-Timelessness.png'
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink key={"Home"} link={"/"}>{"Home"}</NavLink>
              <NavLink key={"Illustrations"} link={"/Illustrations"}>{"Illustrations"}</NavLink>
              <NavLink key={"Commision Me"} link={"#44"}>{"Commision"}</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}