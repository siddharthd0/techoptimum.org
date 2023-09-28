import axios from 'axios';
import {
  Flex,
  Grid,
  FormControl,
  FormErrorMessage,
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
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
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
  const [input, setInput] = useState("");

  const MAILCHIMP_API_KEY = "8225c4a02338cd258618695996ce2003-us21";
  const MAILCHIMP_LIST_ID = "55aa7f75ec";

  const toast = useToast();

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Submitted email:", input);
    try {
      const response = await axios.post(
        `https://us21.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
        {
          email_address: input,
          status: "subscribed",
        },
        {
          headers: {
            Authorization: `apikey ${MAILCHIMP_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      if(response.status === 200) {
        console.log("Successfully subscribed to mailing list:", input);
        toast({
          title: "Subscription Successful",
          description: "We'll get back to you with updates!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        console.error("Failed to subscribe to mailing list:", response.data);
        toast({
          title: "Subscription Failed",
          description: "Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      toast({
        title: "An Error Occurred",
        description: "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const isError = input === "";


  return (
    <>
      <Box maxW="1070px" mx="auto">
      <Flex
        direction={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center", lg: "space-between" }}
        alignItems={{ base: "start", lg: "center" }}
        mb="2rem"
        px="2rem"
      >
        <Box>
          <Heading
            color="primary"
            fontSize={{ base: "3xl", md: "4xl" }}
            mb="1rem"
          >
            Courses
          </Heading>
          <Text
            color="blackAlpha.800"
            fontSize={{ base: "xl", md: "2xl" }}
            mb="1rem"
            fontWeight="medium"
          >
            Beginners Welcome! Have no experience coding?
          </Text>
          <Button
            as="a"
            href="https://dashboard.techoptimum.org"
            colorScheme="blue"
          >
            Explore Courses
          </Button>
        </Box>
      </Flex>


      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap="1.5rem"
        pb="2rem"
        px="2rem"
      >
        {coursesData.map(({ color, title, description, link }) => (
          <CourseCard
            key={title}
            color={color}
            title={title}
            description={description}
            link={link}
          />
        ))}
      </Grid>


      <Box px="2rem" pb="2rem">
        <Heading color="primary">Experienced in Coding?</Heading>
        <Text color="primary" fontSize="lg" mt="1rem">
          Sign up for our newsletter to stay updated on micro hackathons and workshops.
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={isError} mt="1rem">
            <Flex align="center">
              <Input
                type="email"
                value={input}
                onChange={handleInputChange}
                color="black"
                placeholder="Enter your email"
                _placeholder={{ color: "gray.500" }}
                mr="1rem"
              />
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="blue"
                variant="solid"
                type="submit"
              >
                Subscribe
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Box>
    </Box>
    </>
  );
};

export default Courses;
