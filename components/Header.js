import { Center, Container, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { Navbar } from ".";

const headerLogoStyle = {
  fontFamily: `"Trebuchet MS", Helvetica, sans-serif`,
  fontSize: "3.25rem",
  color: "black",
  borderBottom: "1px solid #e5e5e5",
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
      <Navbar />
    </Container>
  );
};

export default Header;
