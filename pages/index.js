import Head from "next/head";
import NextLink from "next/link";
import { GraphQLClient } from "graphql-request";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Image,
  Text,
  Link
} from "@chakra-ui/react";

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master"
  );

  const { products } = await graphcms.request(
    `
      { 
        products {
          slug
          name
        }
      }
    `
  );

  return {
    props: {
      products
    }
  };
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_STORE_BRAND_NAME}</title>
        <meta
          name="description"
          content="Nous sommes une papêterie basée à Curepipe, Ile Maurice. Nous vous proposons une gamme de produits tels que des stylos, cahiers, classeurs, agenda en autres."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container
          maxWidth={[400, 540, 720, 960, 1140]}
          bg="red.800"
          color="white"
          borderRadius="5"
        >
          <Box py="14" px="5">
            <SimpleGrid minChildWidth="300px" spacing="10px">
              <Box className="card-body">
                <Text
                  as="h1"
                  fontSize="5xl"
                  pb="4"
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    lineHeight: "1.2"
                  }}
                >
                  Bienvenue chez <br />
                  {process.env.NEXT_PUBLIC_STORE_BRAND_NAME.toUpperCase()}
                </Text>
                <Text as="i" my="3" fontSize="xl">
                  Nous sommes une papêterie basée à Curepipe, Ile Maurice. Nous
                  vous proposons une gamme de produits tels que des stylos,
                  cahiers, classeurs, agenda en autres.
                </Text>
                <Text pt="4" fontSize="xl" fontWeight="semibold">
                  <NextLink href="/products" passHref>
                    <Link>Cliquez-ici pour en savoir plus...</Link>
                  </NextLink>
                </Text>
              </Box>
              <Box>
                <Image src="/shop.jpg" alt="Shop Image" borderRadius="5" />
              </Box>
            </SimpleGrid>
          </Box>
        </Container>
      </main>
    </>
  );
}
