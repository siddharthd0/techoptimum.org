import React from "react";
import { Button, Flex, Text, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
import Link from "next/link"

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
      <Flex paddingTop={"80px"} id="learn-more" mb="6rem" marginLeft={["2rem", "7rem"]} direction={"column"}>
        <Heading
          data-aos="fade-right"
          data-aos-duration="800"
          fontSize={["4xl", "5xl"]}
          color="primary"
        >
          Our Mission
        </Heading>
        <Text
          data-aos="fade-right"
          data-aos-duration="1200"
          color="primary"
          mr="5rem"
          fontSize={["md", "lg"]}
          mt="1.5rem"
          maxW={"760px"}
        >
          More than one-third of the world&apos;s population especially students
          continues to be excluded from technology because of the{" "}
          <Link href="https://en.wikipedia.org/wiki/Digital_divide">
            digital divide
          </Link>
          . We offer students in need accessible resources, tools, and a
          learning platform along with an inclusive community to learn more
          about their passion. We envision a diverse community that strives for
          inclusion in the technology industry.
        </Text>
        <Link href="/mission">
        <Button
          transition={"200ms !important"}
          w={["305px", "415px"]}
          bgColor={"#4559E9"}
          borderRadius={"18px"}
          color={"#FFFFFF"}
          fontWeight={"400"}
          fontSize={["sm", "lg"]}
          _hover={{ bgColor: "#3244ca" }}
          _active={{ bgColor: "#3244ca" }}
          mt={["1.5rem", "1.75rem"]}
        
        >
          Learn how we accomplish our mission
        </Button>
        </Link>
      </Flex>
    </>
  );
}
