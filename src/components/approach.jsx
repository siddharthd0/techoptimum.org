import {
    Box,
    Circle,
    VStack,
    Button,
    Link,
    Heading,
    Flex,
    Text,
    Center,
    Image,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import { keyframes } from "@emotion/react";
  import { BsArrowRight } from "react-icons/bs";
  import { FcComboChart } from "react-icons/fc";
  import { css } from "@emotion/react";
  
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
          margin="auto"
          maxW="1070px"
          flexDirection={{ base: "column-reverse", md: "row" }}
          alignItems="center"
          px={{ base: "2rem", md: "0rem" }}
        >
          <Box mx="auto" mb={{ base: "4rem", md: "0" }} direction={"column"}>
            <Heading color="primary" fontSize={{ base: "3xl", md: "4xl" }}>
              Start Coding in Seconds
            </Heading>
            <Heading
              fontWeight="medium"
              mt="5px"
              color="blackAlpha.800"
              fontSize={{ base: "xl", md: "2xl" }}
              mb="1rem"
            >
              Beginner&apos;s Welcome!
            </Heading>
  
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
                      <VStack spacing={2} alignItems={{ base: "center", md: "start" }}>
                        <Text
                          transition="300ms"
                          color={activeIndex === index ? "blue.400" : "primary"}
                          fontSize="xl"
                          fontWeight="bold"
                        >
                          {step.title}
                        </Text>
                        <Text
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
          </Box>
          <Box ml={{ base: "0", md: "4rem" }} maxW="700px" mb={{ base: "2rem", md: "0" }}>
            <Image borderRadius="md" src="learn-in-seconds.jpg" />
          </Box>
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
  