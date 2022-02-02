import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const NavbarLink = ({ href, name, ...remainingProps }) => {
  return (
    <Box p="2">
      <NextLink href={href} passHref>
        <Link {...remainingProps}>{name}</Link>
      </NextLink>
    </Box>
  );
};

export default NavbarLink;
