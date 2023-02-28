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
  Tooltip,
  Box,
  Stack,
} from "@chakra-ui/react";

export default function Finder() {
  return (
    <Flex
      marginLeft={["2rem", "7rem"]}
      marginTop={["5rem", "10rem"]}
      direction={"column"}
      mb={["5rem", "10rem"]}
    >
      <Stack direction="row">
        <Box mr="13rem">
          <Head>
            <link
              href="https://unpkg.com/aos@next/dist/aos.css"
              rel="stylesheet"
              key="test"
            />
          </Head>
          <Heading
            color="primary"
            fontSize={["4xl", "5xl"]}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Internship Finder
          </Heading>
          <Text
            color="primary"
            fontSize={["md", "lg"]}
            marginTop={["1.3rem", "2.2rem"]}
            data-aos="fade-right"
            data-aos-duration="1000"
            width={["250px", "600px"]}
          >
            As a high school student, have you ever wanted to get real work
            experience at a real company? This is your chance to discover
            Computer Science internships at a number of businesses!
          </Text>
          <Link
            href="https://internships.techoptimum.org"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Tooltip borderRadius={"10px"} placement="right" label="Coming Soon!    ">

            
            <Button
              data-aos-delay="150"
              data-aos="fade-right"
              data-aos-duration="3000"
              transition={"700ms !important"}
              w={["250px", "280px"]}
              bgColor={"#4559E9"}
              borderRadius={"18px"}
              color={"#FFFFFF"}
              fontWeight={"400"}
              fontSize={["lg", "xl"]}
              _hover={{ bgColor: "#3244ca" }}
              _active={{ bgColor: "#3244ca" }}
              mt={["1.5rem", "2.5rem"]}
              isDisabled
            >
              Find internships now
            </Button></Tooltip>
          </Link>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-delay="450"
          width={"350px"}
          paddingLeft="80px"
        >
          <Image
            mt="-1.5rem"
            src="/internship-finder-image.png"
            alt="internship finder"
          />
        </Box>
      </Stack>
    </Flex>
  );
}
