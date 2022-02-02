import { Flex } from "@chakra-ui/react";
import { NavbarLink } from ".";

const Navbar = (navbarProps) => {
  return (
    <Flex as="nav" {...navbarProps}>
      <NavbarLink href="/products" name="Produits" mx="2" />
      <NavbarLink href="/contact" name="Contact" mx="2" />
    </Flex>
  );
};

export default Navbar;
