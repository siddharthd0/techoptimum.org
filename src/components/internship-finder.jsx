import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
import { Flex, Heading, Text, Button, Icon, Image } from "@chakra-ui/react";

export default function Finder() {
  return (
    <Flex marginLeft={["2rem", "7rem"]} marginTop={"10rem"} direction={"column"}>
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
        fontSize="lg"
        marginTop={"2.2rem"}
        data-aos="fade-right"
        data-aos-duration="1000"
        width={["250px", "600px"]}
      >
        As a high school student, have you ever wanted to get real work
        experience at a real company? This is your chance to discover Computer
        Science internships at a number of businesses!
      </Text>
      
      <Button
        w={"280px"}
        bgColor={"#4559E9"}
        borderRadius={"50px"}
        color={"#FFFFFF"}
        fontWeight={"400"}
        fontSize="xl"
        _hover={{ bgColor: "#3244ca" }}
        mt={"2.5rem"}
        
      >
        Find internships now
      </Button>
      
    </Flex>
  );
}


