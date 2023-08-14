import {
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Spacer,
  Badge,
  Wrap,
  Input,
  Center,
  Link,
} from "@chakra-ui/react";

import { ExternalLinkIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useInView } from "framer-motion";
import Head from "next/head";

const coursesData = [
  {
    color: "#164ba1",
    title: "Intro to React",
    description:
      "Learn how to create simple websites using React, a popular Javascript library. Publish your very own functional website.",
    link: "https://dashboard.techoptimum.org/open-curriculum/introduction-to-react-js-29sbp",
  },

  {
    color: "#1F7A8C",
    title: "Python Basics",
    description:
      "Python is a computer programming language often used to build software, automate tasks, and conduct data analysis.",
    link: "https://dashboard.techoptimum.org/open-curriculum/intro-to-python",
  },
  {
    color: "#05445E",
    title: "Basics of Java",
    description:
      "Learn the basics of Java, a common Object Orientated Programming language. Learn things like functions and classes",
    link: "https://dashboard.techoptimum.org/open-curriculum/basics-of-java-yhgry",
  },

  {
    color: "#1F7A8C",
    title: "Intro to SQL",
    description:
      "Learn how to create, read, update, and delete data in a database using SQL. Create your own database and learn how to use it.",
    link: "https://dashboard.techoptimum.org/open-curriculum/intro-to-sql",
  },
];

const CourseCard = ({ color, title, description, link }) => {
  const { ref, inView } = useInView({ once: true });

  return (
    <Link href={link}>
      <Box
        transition="300ms"
        _hover={{
          boxShadow: "sm",
          borderColor: "blue.500",
        }}
        boxShadow={"xl"}
        borderRadius={"md"}
        alignItems="center"
        color="black"
        direction={"column"}
        px="2rem"
        pt="1.5rem"
      >
        <Box
          pt={".9rem"}
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
        <Text pb="2rem" fontSize={{ base: "xs", md: "sm" }}>
          {description}
        </Text>
      </Box>
    </Link>
  );
};

const Courses = () => {
  return (
    <>
      <Box maxW="1070px" mx="auto" direction={"column"}>
        <Box>
          <Flex
            direction={{ base: "column", lg: "row" }}
            justifyContent={{base:"center", lg:"space-between"}}
            alignItems={{ base: "start", lg: "center" }}
          >
            <Box direction="column">
              <Heading
                textAlign={{ base: "left", lg: "center" }}
                color="primary"
                fontSize={{ base: "3xl", md: "4xl" }}
              >
                Courses
              </Heading>
              <Heading
                textAlign={{ base: "center", lg: "left" }}
                mt={[".1rem", "0"]}
                color="blackAlpha.800"
                fontSize={{ base: "xl", md: "2xl" }}
                mb="1rem"
                fontWeight="medium"
              >
                Have no experience with coding?
              </Heading>
              <Spacer />
              <Button
                textAlign={["center", "left"]}
                as="a"
                href="https://dashboard.techoptimum.org"
                mt={{ base: "0rem", md: "0" }}
              >
                Check out all our courses
              </Button>
            </Box>
          </Flex>
        </Box>
        <Flex
          pb="2rem"

          mt="1rem"
          direction="row"
          spacing="20px"
          justifyContent="center"
          wrap="wrap"
          gap={4}
        >
          {coursesData.map(({ color, title, description, link }) => (
            <Center key={title} flex="1 1 300px">
              <CourseCard
                color={color}
                title={title}
                description={description}
                link={link}
              />
            </Center>
          ))}
        </Flex>

        <Flex direction="column" pb="2rem">
          <Heading color="black">Already experienced in coding?</Heading>
          <Text color="black" fontSize="sm">
            Subscribe to our newsletter for micro hackathon updates and occasional workshops.
          </Text>
          <Flex mt="1rem" direction={{ base: "column", md: "row" }}>
            <Input
              variant="flushed"
              placeholder="Enter your email"
              _placeholder={{ color: "gray.500" }}
              mb={{ base: "1rem", md: "0" }}
            />
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
            >
              Send
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Courses;
