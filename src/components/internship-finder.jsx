'use client';

import React from "react";
import Hackathon from "../components/hackathon-preview";
import {
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

export default function Finder() {
  return (
    <Flex
      borderTop="1px solid #eaeaea"
      pt="2rem"
      mx="1rem"
      maxW="100%"
      marginTop={["1rem", "6rem"]}
      direction={{ base: "column", md: "column" }}
      justifyContent={["center", "unset"]}
      px={{ base: 0, md: "2rem", lg: "5rem" }}

    >
      <Flex direction={"column"}>
        <Heading
          width="100%"
          textAlign={{ base: "center", lg: "left"}}
          color="primary"
          fontSize={{ base: "3xl", md: "4xl" }}
        >
          Apply your Skills
        </Heading>
        <Flex direction="column" mt=".5rem" align={{ base: "center", lg: "start" }}>
          <Heading textAlign={{ base: "center", lg: "start"}} fontSize="3xl" fontWeight="medium" color="primary">
            Tech Optimum Hacks
          </Heading>
          <Spacer />
          <Button
          mt={["1rem", "0"]}
            size="sm"
            rightIcon={<IoIosArrowForward />}
            as="a"
            href="/hackathon"
          >
            Last Year&apos;s Recap
          </Button>
        </Flex>
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
            display="flex"
            mt="1rem"
            as="a"
            href="https://dashboard.techoptimum.org"
          >
            View Internships
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
