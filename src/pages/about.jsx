import Footer from "../components/footer";
import Header from "../components/header";
import ExecutiveCard from "../components/executive-card";
import React from "react";
import { Box, Heading, Text, Flex, Stack, Center } from "@chakra-ui/react";
import AOS from "aos";
import Head from "next/head";
import { useEffect } from "react";
import ChatIcon from "../assets/chat-icon.svg";
import HeartIcon from "../assets/heart-icon.svg";
import SupportIcon from "../assets/lightning-icon.svg";

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/aos@next/dist/aos.css"
          rel="stylesheet"
          key="test"
        />
      </Head>
      <Header />

      <Flex
        marginLeft={"7rem"}
        marginTop={"5rem"}
        direction={"column"}
        data-aos={"fade-up"}
        data-aos-duration={"2000"}
      >
        <Heading marginBottom={"2%"} color="primary" fontSize="4xl">
          About Us
        </Heading>

        <Text width={"70%"} fontSize="2xl">
          Tech Optimum is an organization that is entirely managed by students
          and is commited to influence the next wave of technological leaders.{" "}
          <br />
          <br /> As you deepen your understanding of computer science, we want
          to support you in every way we can. To achieve this, we have a few
          principles:
        </Text>

        <br />
        <br />

        <Stack direction={["column", "row"]} spacing="24px">
          <Box borderRadius={"20px"} w="300px" bg="#29368C">
            <div text-align="center">
              <Text pl={"2rem"} pr="2rem" marginTop="2rem">
                <HeartIcon margin="auto" />
                <Heading
                  pt={".2rem"}
                  pb={".7rem"}
                  fontWeight={"300"}
                  fontSize={"3xl"}
                >
                  Passion
                </Heading>
                Passion drives our creativity. All projects, teams, and
                initiatives are led by passionate team members.
              </Text>
            </div>
          </Box>
          <Box borderRadius={"20px"} w="300px" bg="#29368C">
            <Center>
              <Text pl={"2rem"} pr="2rem" marginTop="2rem">
                <ChatIcon />
                <br />
                We are here to assist you. Finding internships, learning CS, or
                simply having a community to talk to.
              </Text>
            </Center>
          </Box>
          <Box borderRadius={"20px"} w="300px" bg="#29368C">
            <Center>
              <Text pb="4rem" pl={"2rem"} pr="2rem" marginTop="2rem">
                <SupportIcon />
                <br />
                We strive for excellence when it comes to computer science. We
                do not stop when we reach average.
              </Text>
            </Center>
          </Box>
        </Stack>
      </Flex>

      <Flex
        marginLeft={["1rem", "7rem"]}
        marginTop={"5rem"}
        direction={"column"}
        data-aos={"fade-up"}
        data-aos-duration={"2000"}
      >
        <Heading marginBottom={"2%"} color="primary" fontSize="5xl">
          Executives
        </Heading>
        <Flex mb={"9%"} direction={["column", "row"]} gap="45px">
          <ExecutiveCard src="/sid.svg" name="Siddharth Duggal" role="CEO" />
          <ExecutiveCard
            src="/pran.svg"
            name="Pranith Molakalapalli"
            role="CTO"
          />
          <ExecutiveCard src="/arnav.svg" name="Arnav Pandey" role="COO" />
        </Flex>
      </Flex>

      <Footer />
    </>
  );
}
