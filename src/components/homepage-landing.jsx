import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Tooltip,
  Stat,
  Link,
  Image,
  chakra,
  VStack,
  Heading,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import {
  IoIosArrowForward,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { TbSchool } from "react-icons/tb";

export default function Mission() {
  const direction = useBreakpointValue({ base: "column", md: "row" });
  const boxMaxWidth = useBreakpointValue({ base: "100%", md: "60%" });
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl" });

  return (
    <Flex
      direction={direction}
      borderRadius="md"
      bg="blackAlpha.50"
      py={["100px", "25px"]}
      px={{ base: "2rem", md: "2rem" }}
      mb="6rem"
      alignItems="center"
      margin="auto"
      maxW="1070px"
    >
      <Box pr={["0rem", "5rem"]} maxW={boxMaxWidth} position="relative">
        <Image
          borderRadius="md"
          src="digital-divide.jpg"
          alt="Digital Divide"
        />
        <VStack
          position="absolute"
          bottom={["0","10px"]}
          maxW="100%" // limit the width to the containing Box
          color="white"
          p={4}
          borderRadius="md"
        >
          <Link
            _hover={{
              textDecoration: "none",
              color: "primary",
            }}
            href="https://advocacy.code.org/2022_state_of_cs.pdf"
          >
            <Tooltip label="Click to view the full Source of Computer Science Teachers Association, 2020">
              <Stat>
                <chakra.span
                  px="2"
                  py="1"
                  rounded="md"
                  bg="secondary"
                  color="white"
                  fontSize={["2xl","4xl"]}
                >
                  54%
                </chakra.span>
                <br />
                <Text mt=".6rem">
                  <chakra.span
                    px="1"
                    rounded="md"
                    bg="blue.600"
                    color="white"
                    fontSize="md"
                  >
                    of public schools in the U.S. do not offer
                    <br />
                    computer science courses.
                  </chakra.span>
                </Text>
                <chakra.span fontWeight="bold" color="white" fontSize="sm">
                  (Computer Science Teachers Association, 2020)
                </chakra.span>
              </Stat>
            </Tooltip>
          </Link>
        </VStack>
      </Box>

      <Box mt={["1.4rem", "0"]} maxW={"760px"}>
        <Heading
          color="primary"
          fontSize={headingSize}
          fontWeight="600"
          mb="1rem"
        >
          Every student deserves access to computer science education.
        </Heading>
        <Text mt="1rem" color="primary">
          Tech Optimum is committed to bridging the digital divide by providing
          an online learning platform, resources, and tools dedicated to
          computer science education for students across the globe.
        </Text>

        <Stack
          mt="1.5rem"
          spacing={4}
          direction={{ base: "column", md: "row" }}
        >
          <Button
            as="a"
            href="https://dashboard.techoptimum.org"
            rightIcon={<IoIosArrowForward />}
            colorScheme="blue"
          >
            Register Now
          </Button>
          <Button
            as="a"
            href="/mission"
            rightIcon={<TbSchool />}
            colorScheme="green"
            _hover={{
              bg: "green.500",
              borderColor: "green.500",
              color: "white",
            }}
          >
            Learn about our mission
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
