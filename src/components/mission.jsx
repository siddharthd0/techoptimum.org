import React from "react";
import { Flex, Text, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";

export default function Mission() {
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
      <Flex mb="6rem" marginLeft={["2rem", "7rem"]} direction={"column"}>
        <Heading
          data-aos="fade-right"
          data-aos-duration="800"
          fontSize={"5xl"}
          color="primary"
        >
          Our Mission
        </Heading>
        <Text
          data-aos="fade-right"
          data-aos-duration="1200"
          color="primary"
          fontSize={"lg"}
          mt="1.5rem"
          maxW={"760px"}
        >
          More than one-third of the world&apos;s population especially students
          continues to be excluded from technology because of the digital
          divide. We offer students in need accessible resources, tools, and a
          learning platform along with an inclusive community to learn more
          about their passion. We envision a diverse community that strives for
          inclusion in the technology industry.
        </Text>
      </Flex>
    </>
  );
}
