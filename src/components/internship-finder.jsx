"use client";

import React from "react";
import Hackathon from "../components/hackathon-preview";
import { Flex, Heading, Text, Button, Box, Spacer } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

export default function Finder() {
  return (
    <Flex
      borderTop="1px solid #eaeaea"
      pt="2rem"
      mx={["1rem", "auto"]}
      maxW="1080px"
      marginTop={["1rem", "6rem"]}
      direction={{ base: "column", md: "column" }}
      justifyContent={["center", "unset"]}
    >
      <Flex maxW={["95%", "50%"]} direction={"column"}>
        <Heading
          width="100%"
          textAlign={{ base: "center", lg: "left" }}
          color="primary"
          fontSize={{ base: "3xl", md: "4xl" }}
        >
          Apply your Skills
        </Heading>
        <Flex
          direction={["column", "row"]}
          mt=".5rem"
          align={{ base: "center", lg: "start" }}
        >
          <Heading
            textAlign={{ base: "center", lg: "start" }}
            fontSize="3xl"
            fontWeight="medium"
            color="primary"
          >
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
      >
        <Box mb={{ base: "2rem", md: "0" }}>
          <Hackathon />
        </Box>
      </Flex>
    </Flex>
  );
}
