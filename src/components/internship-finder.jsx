import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
import { Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";

export default function Finder() {
  return (
    <Flex marginLeft={"7rem"} marginTop={"10rem"} direction={"column"}>
      <Head>
        <link
          href="https://unpkg.com/aos@next/dist/aos.css"
          rel="stylesheet"
          key="test"
        />
      </Head>
      <Heading
        color="primary"
        fontSize="5xl"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Internship Finder
      </Heading>
      <Text
        color="primary"
        fontSize="3xl"
        marginTop={"2.5rem"}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Land a computer science internship
      </Text>
      <Button
        w={"493px"}
        h={"81px"}
        bgColor={"#4559E9"}
        borderRadius={"50px"}
        color={"#FFFFFF"}
        fontWeight={"400"}
        fontSize={"36px"}
        _hover={{ bgColor: "#3244ca" }}
        mt={"2.5rem"}
      >
        Find internships now
      </Button>
    </Flex>
  );
}

// data-aos="fade-right"
// data-aos-duration="1000"
