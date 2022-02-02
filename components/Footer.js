import { Box, Center } from "@chakra-ui/react";

const Footer = (footerProps) => {
  return (
    <Box as="footer" w="100%" h="50" bg="red.100" {...footerProps}>
      <Center h="100%">
        <span>
          © {process.env.NEXT_PUBLIC_STORE_BRAND_NAME}{" "}
          {new Date().getFullYear()}
        </span>
      </Center>
    </Box>
  );
};

export default Footer;
