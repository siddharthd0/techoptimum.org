import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
import Link from "next/link";

import {
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Badge,
  Tooltip,
  Spacer,
  Box,
  Stack,
  Center
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
        mx="auto"
        maxW="980px"
        marginTop={["1rem", "6rem"]}
        direction={"column"}
        mb={["5rem", "10rem"]}
        justifyContent={["center", "unset"]}
      >
        <Stack direction="row">
          <Box mx={["auto", "unset"]} textAlign={["center", "unset"]} maxW={["100%", "60%"]}>
            <Heading
              color="primary"
              fontSize={["4xl", "6xl"]}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Internship Finder
            </Heading>
            <Flex flexWrap="wrap" gap="5px" justifyContent={["center", "auto"]} mt="5px">
              <Badge data-aos="zoom-in" data-aos-delay="200" mr="6px" colorScheme="pink">Web Development</Badge>
              <Badge data-aos="zoom-in" data-aos-delay="400"mx="6px" colorScheme={"yellow"}>Data Science</Badge>
              <Badge data-aos="zoom-in" data-aos-delay="600"mx="6px"  colorScheme={"orange"}>App Development</Badge>
              <Badge data-aos="zoom-in" data-aos-delay="800"mx="6px"  colorScheme={"teal"}>Machine Learning</Badge>
            </Flex>

            <Text
              color="primary"
              fontSize={["md", "lg"]}
              marginTop={["1rem", "1.5rem"]}
              data-aos="fade-right"
              data-aos-duration="1000"
              width={["250px", "600px"]}
              mx="auto"
              textAlign={["center", "left"]}
            >
              We believe in helping high schoolers find the right internships to
              gain real-world experience. Our team has publicized hundreds of internships open to high school students.
            </Text>
  
            <Button
              data-aos-delay="200"
              data-aos="fade-down"
              data-aos-duration="1000"
              w={["250px", "280px"]}
              bgColor={"#4559E9"}
              borderRadius={"18px"}
              color={"#FFFFFF"}
              fontWeight={"400"}
              fontSize={["md", "lg"]}
              _hover={{ bgColor: "#3244ca" }}
              _active={{ bgColor: "#3244ca" }}
              mt={[".5rem", "1.5rem"]}
              as="a"
              href="https://dashboard.techoptimum.org/internships"
            >
              Find internships now
            </Button>
          </Box>
          <Spacer/>
          <Box ml="5rem" maxW="240px" display={["none", "block"]} data-aos="zoom-in" data-aos-delay="400" >
            <Image
              
              src="/internship-finder-image.png"
              alt="internship finder"
            />
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
