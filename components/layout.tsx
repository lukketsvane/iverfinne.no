import React from 'react'
import { Box, Flex, Text, useBreakpointValue, Image, IconButton, Menu, MenuButton, MenuList, MenuItem, Container } from "@chakra-ui/react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { Menu as MenuIcon } from 'lucide-react'

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => ['href', 'children'].includes(prop),
})<{ isActive: boolean }>`
  color: ${props => props.isActive ? '#ff0000' : 'inherit'};
  text-decoration: none;
  margin-left: 1rem;
  cursor: pointer;
  font-weight: ${props => props.isActive ? 'bold' : 'normal'};
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #ff0000;
    transform: translateY(-2px);
  }
`

interface LayoutProps {
  children: React.ReactNode
}

function Navigation({
  link,
  children,
  isExternal,
}: {
  link: string;
  children: string;
  isExternal?: boolean;
}) {
  const router = useRouter();
  const isActive =
    link === "/" ? router.asPath === link : router.asPath.includes(link);

  return (
    <Link href={link} passHref>
      <Text
        as="a"
        fontSize="lg"
        color={isActive ? "black" : "gray.500"}
        _hover={{ color: "black" }}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </Text>
    </Link>
  );
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box 
        as="header" 
        position="fixed" 
        top={0} 
        left={0} 
        right={0} 
        height="70px" 
        zIndex={100} 
        bg="rgba(255, 255, 255, 0.95)"
        boxShadow="0 2px 10px rgba(0,0,0,0.1)"
        backdropFilter="blur(10px)"
      >
        <Container maxW="container.xl" height="100%">
          <Flex justifyContent="space-between" alignItems="center" height="100%">
            <Flex alignItems="center">
              <Text fontSize="sm" ml={4} display={{ base: 'none', md: 'block' }} color="gray.600">
                OSLO, NORWAY
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Box width="0.75rem" height="0.75rem" borderRadius="50%" bg="red.500" mr={2} />
              {!isMobile && (
                <Flex as="nav" alignItems="center">
                  <NavLink href="/" isActive={router.pathname === '/'}>HOME</NavLink>
                  <NavLink href="/reading" isActive={router.pathname === '/reading'}>READING</NavLink>
                  <NavLink href="/writing" isActive={router.pathname === '/writing'}>WRITING</NavLink>
                  <NavLink href="/projects" isActive={router.pathname === '/projects'}>BUILD LOG</NavLink>
                </Flex>
              )}
              {isMobile && (
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<MenuIcon />}
                    variant="outline"
                    size="sm"
                  />
                  <MenuList>
                    <MenuItem as="div"><Navigation link="/">HOME</Navigation></MenuItem>
                    <MenuItem as="div"><Navigation link="/reading">READING</Navigation></MenuItem>
                    <MenuItem as="div"><Navigation link="/writing">WRITING</Navigation></MenuItem>
                    <MenuItem as="div"><Navigation link="/projects">BUILD LOG</Navigation></MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Box as="main" pt="90px" flex={1}>
        <Container maxW="container.xl" px={4}>
          {children}
        </Container>
      </Box>
      <Box as="footer" py={6} bg="gray.50">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <Text fontSize="sm" color="gray.600">
              © {new Date().getFullYear()} FINNE KODER. All rights reserved.
            </Text>
            <Flex mt={{ base: 4, md: 0 }}>
              <Link href="/privacy" passHref>
                <Text as="a" fontSize="sm" color="gray.600" mr={4} _hover={{ color: "red.500" }}>Privacy Policy</Text>
              </Link>
              <Link href="/terms" passHref>
                <Text as="a" fontSize="sm" color="gray.600" _hover={{ color: "red.500" }}>Terms of Service</Text>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default Layout