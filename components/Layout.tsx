// ./components/Layout.tsx
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
  MenuGroup,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { FiMenu } from "react-icons/fi";

function Navigation({
  link,
  children,
  isExternal,
}: {
  link: string;
  children: React.ReactNode;
  isExternal?: boolean;
}) {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const isActive =
    link === "/" ? router.asPath === link : router.asPath.includes(link);
  const activeColor = colorMode === "dark" ? "white" : "black";
  const inactiveColor = colorMode === "dark" ? "gray.400" : "gray.500";

  return (
    <Link href={link} passHref>
      <Text
        as="a"
        target={isExternal ? "_blank" : "_self"}
        fontSize="lg"
        color={isActive ? activeColor : inactiveColor}
        _hover={{ color: activeColor }}
        fontWeight={isActive ? "bold" : "normal"}
      >
        {children}
      </Text>
    </Link>
  );
}

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Container
      position="relative"
      maxW="container.xl"
      px={0}
      mt={{ base: 16, md: 20 }}
      pb={{ base: 8, md: "10em" }}
      gap={{ md: 10 }}
    >
      <Flex
        position="absolute"
        right="100%"
        mr="160px"
        display={{ base: "none", lg: "flex" }}
      >
        <VStack position="fixed" align="flex-start" spacing={10}>
          <VStack align="flex-start">
            <Text fontWeight="bold" fontSize="smaller">
              NAVIGATION
            </Text>
            <Navigation link="/">Home</Navigation>
            <Navigation link="/projects">Projects</Navigation>
            <Navigation link="/writing">Writing</Navigation>
            <Navigation link="/books">Books</Navigation>
          </VStack>
          <VStack align="flex-start">
            <Text fontWeight="bold" fontSize="smaller">
              FIND ME ON
            </Text>
            <Navigation link="https://twitter.com/amitoser" isExternal>
              Twitter
            </Navigation>
            <Navigation link="https://github.com/lukketsvane" isExternal>
              GitHub
            </Navigation>
          </VStack>
        </VStack>
      </Flex>
      <Container width={{ md: "container.md" }} position="relative">
        <Box
          width="100%"
          height={20}
          position="fixed"
          top={0}
          zIndex={100}
          display={{ base: "none", lg: "block" }}
        />
        <Flex
          justify="space-between"
          position="fixed"
          top={0}
          display={{ base: "flex", lg: "none" }}
          height={12}
          zIndex={50}
          left={0}
          width="100%"
          align="center"
          borderBottom="1px solid"
          borderBottomColor="gray.200"
          bg="white"
        >
          <Container px={8}>
            <Flex justify="space-between" width="100%">
              <HStack spacing={8}>
                <Navigation link="/">Home</Navigation>
                <Navigation link="/writing">Writing</Navigation>
                <Navigation link="/books">Books</Navigation>
                <Navigation link="/projects">Projects</Navigation>
              </HStack>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<Icon as={FiMenu} boxSize={4} />}
                  variant="outline"
                  size="sm"
                />
                <MenuList>
                  <MenuGroup title="NAVIGATION">
                    <VStack align="flex-start" px={4} spacing={3} mb={4}>
                      <Navigation link="/">Home</Navigation>
                      <Navigation link="/writing">Writing</Navigation>
                      <Navigation link="/books">Books</Navigation>
                      <Navigation link="/projects">Projects</Navigation>
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
            </Flex>
          </Container>
        </Flex>
        {children}
      </Container>
    </Container>
  );
}

export default Layout;
