// import {
//   Grid,
//   Typography,
//   Container,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   Box,
// } from "@material-ui/core";
// import { Center, Container, Heading } from "@chakra-ui/react";
import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  VStack,
  Heading,
  IconButton,
  Spacer,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

const restaurants = [
  {
    name: "mosconi",
    likes: 3,
  },
  {
    name: "ecco",
    likes: 0,
  },
  {
    name: "olska",
    likes: 1,
  },
  {
    name: "nota",
    likes: 2,
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        /> */}
      </Head>
      <main className={styles.main}>
        <Box p="10" width="100%" height="100%">
          <Container mb="10">
            <Center>
              <Heading as="h1" size="3xl">
                fancy fuckers
              </Heading>
            </Center>
          </Container>
          <Container>
            <VStack>
              {restaurants.map((restaurant) => (
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Box p="5">
                    <Box fontWeight="semibold" as="h4">
                      {restaurant.name}
                    </Box>
                    <Box>
                      <Button colorScheme="teal" size="xs">
                        like
                      </Button>
                      <Badge>{restaurant.likes} people like this</Badge>
                    </Box>
                  </Box>
                </Box>
              ))}
            </VStack>
          </Container>
          {/* <Container maxWidth="md">
          <Typography variant="h1">fancy fuckerss</Typography>
          <Grid container spacing={3}>
            {restaurants.map(({ name }) => (
              <Grid item xs={6}>
                <Card>
                  <CardContent>
                    <Typography>{name}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Vote</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container> */}
        </Box>
      </main>

      <footer className={styles.footer}>
        {/* <Container maxWidth="md" bg="#333">
          <Box color="#fff">
            <Typography>fancy fuckerss &#8482;</Typography>
          </Box>
        </Container> */}
      </footer>
    </div>
  );
}