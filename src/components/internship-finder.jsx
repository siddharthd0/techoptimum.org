'use client';

import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
import Link from "next/link";
import Hackathon from "../components/hackathon-preview";
import {
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  Image,
  Badge,
  Tooltip,
  Spacer,
  Box,
  Stack,
  Center,
} from "@chakra-ui/react";

export default function Finder() {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/aos@next/dist/aos.css"
          rel="stylesheet"
          key="test"
        />
      </Head>

      <Flex
        borderTop="1px solid #eaeaea"
        pt="2rem"
        mx="auto"
        maxW="1070px"
        marginTop={["1rem", "6rem"]}
        direction={{ base: "column", md: "column" }}
        justifyContent={["center", "unset"]}
        px={{ base: "2rem", md: "0rem" }}
        
      >
        <Flex alignItems="center">
          {" "}
          <Heading
          width="100%"
              textAlign={["center", "left"]}
             
            color="primary"
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            Apply your Skills
          </Heading>
        </Flex>

        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "center" }}
          mt={{ base: "0rem", md: "0" }}
        >
          <Box mb={{ base: "2rem", md: "0" }}>
            <Hackathon />
          </Box>
          <Box maxW={{ base: "100%", md: "40%" }} mx="auto">
            <Heading
              textAlign={["center", "left"]}
              fontWeight="medium"
              fontSize={["2xl", "3xl"]}
              color="primary"
            >
              Our Internship Finder
            </Heading>
            <Heading
              textAlign={["center", "left"]}
              mt="4px"
              fontWeight="light"
              fontSize="lg"
              color="blackAlpha.800"
            >
              Apply your skills in the real-world
            </Heading>
            <Text
              textAlign={["center", "left"]}
              color="blackAlpha.800"
              mt="10px"
            >
              More than 50 internships on our public internship finder, with
              more being added every week. Apply your skills in the real-world
              industry and gain valuable experience. We have publicized
              internships ranging from web development to machine learning.
            </Text>
            <Button
              display={["none", "flex"]}
              mt="1rem"
              as="a"
              href="https://dashboard.techoptimum.org"
            >
              View Internships
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
