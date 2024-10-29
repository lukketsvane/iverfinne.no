import React from 'react'
import { Box, Flex, Text, Button, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react'
import { Sun, Moon } from 'lucide-react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()
  const [colorMode, setColorMode] = React.useState<'light' | 'dark'>('light')

  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  const isActive = (path: string) => router.pathname === path

  return (
    <Box as="header" bg={bgColor} py={4} px={8} boxShadow="sm">
      <Flex alignItems="center" justifyContent="space-between" maxWidth="1200px" margin="0 auto">
        <Flex alignItems="center">
          <Text fontSize="xl" fontWeight="bold" color={textColor} mr={8}>
            FINNE KODER
          </Text>

          <Text fontSize="sm" color="gray.500">
            OSLO, NORWAY
          </Text>
        </Flex>
        <Flex alignItems="center">
          <NavLink href="/" isActive={isActive('/')}>
            HOME
          </NavLink>
          <NavLink href="/reading" isActive={isActive('/reading')}>
            READING
          </NavLink>
          <NavLink href="/writing" isActive={isActive('/writing')}>
            WRITING
          </NavLink>
          <NavLink href="/projects" isActive={isActive('/projects')}>
            BUILD LOG
          </NavLink>
          <Button
            as={ChakraLink}
            href="/contact"
            colorScheme="blue"
            size="sm"
            ml={4}
          >
            Let's Talk
          </Button>
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            size="sm"
            ml={2}
            aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
          >
            {colorMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

interface NavLinkProps {
  href: string
  isActive: boolean
  children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ href, isActive, children }) => {
  const activeColor = useColorModeValue('blue.500', 'blue.200')
  const inactiveColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <NextLink href={href} passHref legacyBehavior>
      <ChakraLink
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        fontWeight={isActive ? 'bold' : 'normal'}
        color={isActive ? activeColor : inactiveColor}
        mr={4}
      >
        {children}
      </ChakraLink>
    </NextLink>
  )
}

export default Header