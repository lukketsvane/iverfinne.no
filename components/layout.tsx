import {
  Container,
  VStack,
  Text,
  Flex,
  Box,
  HStack,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  Icon,
  MenuGroup,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { FiMenu } from "react-icons/fi";

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
  const isActive = link === "/" ? router.asPath === link : router.asPath.includes(link);
  const activeColor = useColorModeValue("black", "#fafafa");
  const inactiveColor = useColorModeValue("gray.600", "rgba(255, 255, 255, 0.50)");

  const content = (
    <Text
      as="span"
      fontSize="lg"
      color={isActive ? activeColor : inactiveColor}
      _hover={{ color: activeColor }}
    >
      {children}
    </Text>
  );

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <NextLink href={link} passHref legacyBehavior>
      <a>{content}</a>
    </NextLink>
  );
}

function Layout({ children }: PropsWithChildren<{}>) {
  const bgColor = useColorModeValue("white", "#0a0a0a");
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container
      position="relative"
      mt={{ base: 16, md: 20 }}
      pb={{ base: 8, md: "10em" }}
      maxW={{ base: "100%", xl: "container.md" }}
      px={{ base: 8, xl: 12 }}
    >
      <Flex
        justify="space-between"
        position="fixed"
        top={0}
        display="flex"
        height={12}
        zIndex={50}
        left={0}
        width="100%"
        align="center"
        borderBottom="1px solid"
        borderBottomColor="gray.200"
        bg={bgColor}
      >
        {/* Left side: Iver Finne's name as a non-selectable text logo */}
        <Box pl={4} userSelect="none">
          <Text fontSize="lg" fontWeight="bold">
            Iver Finne
          </Text>
        </Box>

        {/* Show full navigation on tablet and larger */}
        <HStack spacing={4} pl={4} pr={8}>
          <Navigation link="/">Home</Navigation>
          <Navigation link="/writing">Writing</Navigation>
          <Navigation link="/reading">Reading</Navigation>
          <Navigation link="/projects">Build Log</Navigation>
        </HStack>

        {/* Right side: Hamburger menu */}
        <Box ml="auto" mr={4}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<Icon as={FiMenu} boxSize={4} />}
              variant="outline"
              size="sm"
            />
            <MenuList bg={bgColor}>
              <MenuGroup title="NAVIGATION">
                <VStack align="flex-start" px={4} spacing={3} mb={4}>
                  <Navigation link="/">Home</Navigation>
                  <Navigation link="/writing">Writing</Navigation>
                  <Navigation link="/reading">Reading</Navigation>
                  <Navigation link="/projects">Build Log</Navigation>
                </VStack>
              </MenuGroup>
              <MenuGroup title="FIND ME ON">
                <VStack align="flex-start" px={4} spacing={3} mb={2}>
                  <Navigation link="https://twitter.com/amitoser" isExternal>
                    Twitter
                  </Navigation>
                  <Navigation link="https://github.com/lukketsvane" isExternal>
                    GitHub
                  </Navigation>
                </VStack>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Box mt={12}>{children}</Box>
    </Container>
  );
}

export default Layout;
