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
        marginLeft={["2rem", "7rem"]}
        marginTop={"5rem"}
        direction={"column"}
      >
        <Heading
          data-aos-delay="400"
          data-aos="fade-up-right"
          marginBottom={"2%"}
          color="primary"
          fontSize="4xl"
        >
          About Us
        </Heading>

        <Text data-aos="fade-up-right" width={["90%", "70%"]} fontSize="2xl">
          Tech Optimum is an organization that is entirely managed by students
          and is commited to influence the next wave of technological leaders.{" "}
          <br />
          <br /> As you deepen your understanding of computer science, we want
          to support you in every way we can. To achieve this, we have a few
          principles:
        </Text>

        <br />

        <Stack direction={["column", "row"]} spacing="30px">
          <Box data-aos="zoom-in" borderRadius={"20px"} w="300px" bg="#29368C">
            <Text
              mb={"30px"}
              textAlign={"center"}
              pl={"2rem"}
              pr="2rem"
              marginTop="2rem"
            >
              <Flex textAlign={"center"} margin="auto">
                <Text margin="auto">
                  <HeartIcon />
                </Text>
              </Flex>
              <Heading
                pt={".2rem"}
                pb={".5rem"}
                fontWeight={"300"}
                fontSize={"3xl"}
                textAlign={"center"}
              >
                Passion
              </Heading>
              Passion drives our creativity. All projects, teams, and
              initiatives are led by passionate team members.
            </Text>
          </Box>
          <Box data-aos="zoom-in" borderRadius={"20px"} w="300px" bg="#29368C">
            <Text textAlign={"center"} pl={"2rem"} pr="2rem" marginTop="2rem">
              <Flex textAlign={"center"} margin="auto">
                <Text margin="auto">
                  <ChatIcon />
                </Text>
              </Flex>
              <Heading
                pt={".2rem"}
                pb={".5rem"}
                fontWeight={"300"}
                fontSize={"3xl"}
                textAlign={"center"}
              >
                Support
              </Heading>
              We are here to assist you. Finding internships, learning CS, or
              having a community to talk to.
            </Text>
          </Box>
          <Box data-aos="zoom-in" borderRadius={"20px"} w="300px" bg="#29368C">
            <Text textAlign={"center"} pl={"2rem"} pr="2rem" marginTop="2rem">
              <Flex textAlign={"center"} margin="auto">
                <Text margin="auto">
                  <SupportIcon />
                </Text>
              </Flex>
              <Heading
                pt={".4rem"}
                pb={".5rem"}
                fontWeight={"300"}
                fontSize={"3xl"}
                textAlign={"center"}
              >
                Excellence
              </Heading>
              We strive for excellence when it comes to computer science. We do
              not stop when we reach average.
            </Text>
          </Box>
        </Stack>
      </Flex>

      <Flex
        marginLeft={["1rem", "7rem"]}
        marginTop={"5rem"}
        direction={"column"}
      >
        <Heading marginBottom={"2%"} color="primary" fontSize="5xl">
          Executives
        </Heading>
        <Flex mb={"9%"} direction={["column", "row"]} gap="45px">
          <ExecutiveCard
            src="/sid.svg"
            name="Siddharth Duggal"
            role="Chief Executive Officer"
          />
          <ExecutiveCard
            src="/pran.svg"
            name="Pranith Molakalapalli"
            role="Chief Technology Officer"
          />
          <ExecutiveCard
            src="/arnav.svg"
            name="Arnav Pandey"
            role="Chief Operating Officer"
          />
        </Flex>
      </Flex>

      <Footer />
    </>
  );
}
