import {
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Spacer,
  Badge,
  Wrap,
  Center,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useInView } from "framer-motion";
import Head from "next/head";

const coursesData = [
  {
    color: "#164ba1",
    title: "Intro to React",
    description:
      "Learn how to create simple websites using React, a popular Javascript library. Publish your very own functional website.",
  },

  {
    color: "#1F7A8C",
    title: "Python Basics",
    description:
      "Python is a computer programming language often used to build software, automate tasks, and conduct data analysis.",
  },
  {
    color: "#05445E",
    title: "Web Dev.",
    description:
      "Learn how to create simple websites using HTML, CSS, and Javascript. Publish & share your very own functional website.",
  },

  {
    color: "#1F7A8C",
    title: "Intro to SQL",
    description:
      "Learn how to create, read, update, and delete data in a database using SQL. Create your own database and learn how to use it.",
  },
];

const CourseCard = ({ color, title, description }) => {
  const { ref, inView } = useInView({ once: true });

  return (
    <Box
      m={{ base: "1rem", md: "0" }}
      transition="300ms"
      _hover={{
        boxShadow: "sm",
        borderColor: "blue.500",
      }}
      boxShadow={"xl"}
      borderRadius={"md"}
      w={{ base: "auto", md: "280px" }}
      alignItems="center"
      color="black"
      direction={"column"}
      px="2rem"
      pt="1.5rem"
    >
      <Box
        pt={"2rem"}
        pb={".7rem"}
        alignItems="center"
        direction="row"
        display="flex"
      >
        <Heading fontWeight={"medium"} fontSize={{ base: "lg", md: "2xl" }}>
          {title}
        </Heading>
        <Spacer />
        <Badge h="20px" colorScheme="blue">
          Free
        </Badge>
      </Box>
      <Text pb="2rem" fontSize={{ base: "xs", md: "md" }}>{description}</Text>
    </Box>
  );
};

const Courses = () => {
  return (
    <>
      <Box
        borderTop="1px solid #eaeaea"
        pt="2rem"
        mt="4rem"
        maxW="1300px"
        mx="auto"
        direction={"column"}
      >
        <Box>
          <Flex direction={{ base: 'column', md: 'row'}} justifyContent={"center"} alignItems="center">
            <Box direction="column">
              <Heading color="primary" fontSize={{ base: "3xl", md: "5xl" }}>
                Courses
              </Heading>
              <Heading
                color="blackAlpha.800"
                fontSize={{ base: "xl", md: "2xl" }}
                mb="1rem"
                fontWeight="medium"
              >
                Featured Courses
              </Heading>
            </Box>
            <Spacer />
            <Button as="a" href="https://dashboard.techoptimum.org" mt={{ base: '1rem', md: '0' }}>Check out all our courses</Button>
          </Flex>
        </Box>
        <Wrap
        pb="2rem"
          margin="auto"
          mt="1rem"
          justifyContent={"center"}
          direction={{ base: "column", md: "row" }}
          spacing={"50px"}
        >
          {coursesData.map(({ color, title, description }) => (
            <Center key={title} w={{ base: "auto", md: "280px" }}>
              <CourseCard
                key={title}
                color={color}
                title={title}
                description={description}
              />
            </Center>
          ))}
        </Wrap>
      </Box>
    </>
  );
};

export default Courses;
