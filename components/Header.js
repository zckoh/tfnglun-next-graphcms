import { Center, Container, Box, Divider } from "@chakra-ui/react";
import NextLink from "next/link";
import { Navbar } from ".";

const headerLogoStyle = {
  fontFamily: `"Trebuchet MS", Helvetica, sans-serif`,
  fontSize: "3.25rem",
  color: "black",
  width: "100%"
};

const Header = (headerProps) => {
  return (
    <Container centerContent maxW="container.lg">
      <Box as="header" style={headerLogoStyle} {...headerProps}>
        <Center>
          <NextLink href="/">
            {process.env.NEXT_PUBLIC_STORE_BRAND_NAME.toUpperCase()}
          </NextLink>
        </Center>
      </Box>
      <Divider />
      <Navbar py="2" />
    </Container>
  );
};

export default Header;
