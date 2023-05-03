import React from "react";
import { Box, Heading, Text, Flex, Icon, Button, Link } from "@chakra-ui/react";
import { BsLayers, BsGraphUp, BsArrowUpRight } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import AOS from "aos";
import Head from "next/head";
import { useEffect } from "react";
export default function Jobs() {
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
      <Flex
        mx="auto"
        maxW="980px"
        marginTop={["1rem", "6rem"]}
        direction={"column"}
        mb={["5rem", "10rem"]}
      >
        <Link href="/volunteer">
        <Heading marginBottom={"2%"} color="primary" fontSize={["4xl", "6xl"]}>
          Volunteer with us
        </Heading>
        </Link>
     
      </Flex>
    </>
  );
}
