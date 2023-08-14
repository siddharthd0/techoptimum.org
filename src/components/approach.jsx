'use client';

import {
  Box,
  Circle,
  VStack,
  Link,
  Heading,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import { BsArrowRight } from "react-icons/bs";
import Courses from '@/components/courses';

const StepsDisplay = () => {
  const movingGradient = keyframes`
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    `;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Flex
        borderTop="1px solid #eaeaea"
        pt="2rem"
        mt="3rem !important"
        mx={{ base: "1rem", lg: "auto"}}
        maxW="1070px"
        flexDirection="column"
        alignItems="center"
        px={{ base: "2rem", md: "0rem" }}
      >
        <Flex w="100%" direction="column" align={{ base: "center", lg: "start" }} justify={{ base: "center", lg: "start" }}>
          <Heading
            textAlign={{ base: "center", lg: "left" }}
            color="primary"
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            Start Coding in Seconds
          </Heading>
          <Heading
            textAlign={{ base: "center", lg: "left" }}
            fontWeight="medium"
            mt="5px"
            color="blackAlpha.800"
            fontSize={{ base: "lg", md: "2xl" }}
            mb="1rem"
          >
            Beginner&apos;s Welcome!
          </Heading>
        </Flex>
        <Flex direction={{ base: "column-reverse", md: "row"}} justifyContent='space-between'>
          <Flex mb={{ base: "4rem", md: "0" }} direction="column">
            <Box
              boxShadow="lg"
              borderRadius="10px"
              maxW="700px"
              margin="auto"
              py="2rem"
              px="2rem"
            >
              <VStack spacing={8} alignItems="start">
                {steps.map((step, index) => (
                  <Box key={index}>
                    <Flex
                      direction={{ base: "column", md: "row" }}
                      alignItems="center"
                    >
                      <Circle
                        mb={{ base: "1rem", md: "0" }}
                        border={"2px solid"}
                        borderColor={
                          activeIndex === index ? "transparent" : "blue.400"
                        }
                        size="40px"
                        bg={activeIndex === index ? "transparent" : "blue.500"}
                        color="black"
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="bold"
                        mr={4}
                        transition="all 0.4s ease-in-out"
                        sx={{
                          background:
                            activeIndex === index
                              ? "linear-gradient(135deg, white, blue)"
                              : "",
                          backgroundSize: "200% 200%",
                          animation:
                            activeIndex === index
                              ? `${movingGradient} 3s linear infinite`
                              : "",
                        }}
                      >
                        {index + 1}
                      </Circle>
                      <VStack
                        spacing={2}
                        alignItems={{ base: "center", md: "start" }}
                      >
                        <Text
                          textAlign={["center", "left"]}
                          transition="300ms"
                          color={activeIndex === index ? "blue.400" : "primary"}
                          fontSize="xl"
                          fontWeight="bold"
                        >
                          {step.title}
                        </Text>
                        <Text
                          textAlign={["center", "left"]}
                          transition="300ms"
                          color={activeIndex === index ? "black" : "gray.500"}
                        >
                          {step.description}
                        </Text>
                      </VStack>
                    </Flex>
                  </Box>
                ))}
              </VStack>

              <Link
                color="blue.400"
                _hover={{
                  color: "purple.400",
                  textDecoration: "none",
                }}
                mt="2rem"
                display="flex"
                alignItems="center"
                href="https://dashboard.techoptimum.org"
              >
                <Text
                  transition="300ms"
                  _hover={{
                    color: "purple.400",
                    textDecoration: "none",
                  }}
                  pr="4px"
                  color="blue.600"
                >
                  Get Started
                </Text>
                <BsArrowRight />
              </Link>
            </Box>
          </Flex>
          {/* <Flex>
            <Courses />
          </Flex> */}
          <Flex
          direction="row"
          align="center"
          justify="center"
          >
            <Courses />
            {/* <Image borderRadius="md" src="learn-in-seconds.jpg" alt="Learn In Seconds" /> */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default StepsDisplay;

const steps = [
  {
    title: "Register ",
    description:
      "It's completely free to register and you can start coding in seconds! Just head over to dashboard.techoptimum.org and sign up.",
  },
  {
    title: "Sign up for a Course",
    description:
      "Once you've registered, you can sign up for a course. We have a wide range of courses available, from beginner to advanced.",
  },
  {
    title: "Learn through Videos and  Mini-quizzes",
    description:
      "Our courses are designed to be interactive and engaging. You'll learn through videos and mini-quizzes that will help you retain the information.",
  },
  {
    title: "Create Projects",
    description:
      "Create projects while you learn. You'll be able to show off your projects to your friends and family.",
  },
];
