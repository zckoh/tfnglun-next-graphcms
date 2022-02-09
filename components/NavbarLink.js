import { Box, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const NavbarLink = ({ href, name, ...remainingProps }) => {
  return (
    <Box p="2">
      <NextLink href={href} passHref>
        <Button variant="link" {...remainingProps}>
          {name}
        </Button>
      </NextLink>
    </Box>
  );
};

export default NavbarLink;
